'use server'

import { Resend } from 'resend'
import { rateLimit } from '@/lib/rate-limit'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
  try {
    // Rate limiting
    const limiter = rateLimit({
      interval: 60000, // 1 minute in milliseconds
      uniqueTokenPerInterval: 500
    })
    
    try {
      await limiter.check(5, 'CONTACT_FORM') // 5 requests per minute
    } catch {
      return {
        error: 'Rate limit exceeded. Please try again later.'
      }
    }

    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    // Validate required fields
    if (!name || !email || !message) {
      return {
        error: 'Name, email, and message are required.'
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.toString())) {
      return {
        error: 'Please provide a valid email address.'
      }
    }

    // Parse and format email recipients
    const recipients = process.env.EMAIL_TO?.split(',').map(recipient => {
      // Remove any leading/trailing whitespace
      recipient = recipient.trim()
      // Check if the email is in the format: "Name <email@example.com>"
      const match = recipient.match(/^(?:([^<]*?)\s*)?<(.+@[^>]+)>$/)
      // If it matches the format, return just the email part, otherwise return the whole string
      return match ? match[2].trim() : recipient
    }).filter(Boolean) // Remove any empty entries

    if (!recipients?.length) {
      throw new Error('No valid recipient email addresses configured')
    }

    const result = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: recipients,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email.toString()
    })

    if (!result?.data?.id) {
      throw new Error('Failed to send email: No confirmation ID received')
    }

    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    return {
      error: 'Failed to send email. Please try again later.'
    }
  }
}