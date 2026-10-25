'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const WIDTH = 640
const HEIGHT = 120
const GROUND_Y = 96
const PLAYER_X = 56
const PLAYER_W = 28
const PLAYER_H = 32
const GRAVITY = 0.55
const JUMP_V = -9.5
const OBSTACLE_W = 18
const OBSTACLE_H = 36
const MIN_GAP = 140
const MAX_GAP = 260

function drawStaticScene(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#f4f4f5'
  ctx.fillRect(0, 0, WIDTH, HEIGHT)
  ctx.strokeStyle = '#d4d4d8'
  ctx.beginPath()
  ctx.moveTo(0, GROUND_Y + 4)
  ctx.lineTo(WIDTH, GROUND_Y + 4)
  ctx.stroke()
  ctx.fillStyle = '#ea580c'
  ctx.beginPath()
  ctx.roundRect(PLAYER_X, GROUND_Y - PLAYER_H, PLAYER_W, PLAYER_H, 6)
  ctx.fill()
  ctx.fillStyle = '#18181b'
  ctx.fillRect(PLAYER_X + 8, GROUND_Y - PLAYER_H + 10, 5, 5)
  ctx.fillRect(PLAYER_X + 16, GROUND_Y - PLAYER_H + 10, 5, 5)
  ctx.fillStyle = '#71717a'
  ctx.fillRect(420, GROUND_Y - OBSTACLE_H, OBSTACLE_W, OBSTACLE_H)
}

function drawFrame(
  ctx: CanvasRenderingContext2D,
  playerY: number,
  obstacles: { x: number }[],
  score: number,
) {
  ctx.fillStyle = '#fafafa'
  ctx.fillRect(0, 0, WIDTH, HEIGHT)
  ctx.strokeStyle = '#e4e4e7'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(0, GROUND_Y + 4)
  ctx.lineTo(WIDTH, GROUND_Y + 4)
  ctx.stroke()

  for (const o of obstacles) {
    ctx.fillStyle = '#a1a1aa'
    ctx.fillRect(o.x, GROUND_Y - OBSTACLE_H, OBSTACLE_W, OBSTACLE_H)
    ctx.fillStyle = '#71717a'
    ctx.fillRect(o.x + 4, GROUND_Y - OBSTACLE_H + 6, OBSTACLE_W - 8, 4)
  }

  const py = playerY
  ctx.fillStyle = '#ea580c'
  ctx.beginPath()
  ctx.roundRect(PLAYER_X, py, PLAYER_W, PLAYER_H, 6)
  ctx.fill()
  ctx.fillStyle = '#fb923c'
  ctx.fillRect(PLAYER_X + PLAYER_W - 6, py + 12, 8, 6)
  ctx.fillStyle = '#18181b'
  ctx.fillRect(PLAYER_X + 8, py + 10, 5, 5)
  ctx.fillRect(PLAYER_X + 16, py + 10, 5, 5)

  ctx.fillStyle = '#52525b'
  ctx.font = '600 14px system-ui, sans-serif'
  ctx.fillText(`Score ${Math.floor(score)}`, WIDTH - 88, 22)
}

export function NotFoundRunnerGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [score, setScore] = useState(0)
  const [liveMessage, setLiveMessage] = useState('Score 0')

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (reducedMotion) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let playerY = GROUND_Y - PLAYER_H
    let vy = 0
    let onGround = true
    let obstacles: { x: number }[] = [{ x: WIDTH + 120 }]
    let gap = MIN_GAP + Math.random() * (MAX_GAP - MIN_GAP)
    let gameScore = 0
    let speed = 4.2
    let raf = 0
    let running = true

    const jump = () => {
      if (onGround) {
        vy = JUMP_V
        onGround = false
      }
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.key === ' ') {
        e.preventDefault()
        jump()
      }
    }

    const onPointer = () => jump()

    const root = containerRef.current
    root?.addEventListener('keydown', onKey)
    canvas.addEventListener('pointerdown', onPointer)

    const tick = () => {
      if (!running) return
      vy += GRAVITY
      playerY += vy
      if (playerY >= GROUND_Y - PLAYER_H) {
        playerY = GROUND_Y - PLAYER_H
        vy = 0
        onGround = true
      }

      speed = Math.min(7.5, 4.2 + gameScore / 800)
      for (const o of obstacles) o.x -= speed
      obstacles = obstacles.filter((o) => o.x > -OBSTACLE_W)
      const last = obstacles[obstacles.length - 1]
      if (last && last.x < WIDTH - gap) {
        obstacles.push({ x: WIDTH + 20 })
        gap = MIN_GAP + Math.random() * (MAX_GAP - MIN_GAP)
      }

      gameScore += speed * 0.35
      const displayScore = Math.floor(gameScore)
      setScore(displayScore)
      setLiveMessage(`Score ${displayScore}`)

      const px = PLAYER_X
      const py = playerY
      for (const o of obstacles) {
        if (
          px + PLAYER_W > o.x + 4 &&
          px + 4 < o.x + OBSTACLE_W &&
          py + PLAYER_H > GROUND_Y - OBSTACLE_H + 4
        ) {
          gameScore = 0
          speed = 4.2
          obstacles = [{ x: WIDTH + 80 }]
          playerY = GROUND_Y - PLAYER_H
          vy = 0
          onGround = true
          setLiveMessage('Score reset to 0')
          break
        }
      }

      drawFrame(ctx, playerY, obstacles, gameScore)
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      root?.removeEventListener('keydown', onKey)
      canvas.removeEventListener('pointerdown', onPointer)
    }
  }, [reducedMotion])

  useEffect(() => {
    if (!reducedMotion) return
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (ctx) drawStaticScene(ctx)
  }, [reducedMotion])

  const focusGame = useCallback(() => {
    containerRef.current?.focus()
  }, [])

  return (
    <div className="rounded-xl border border-zinc-200 bg-white/80 p-4 shadow-sm h-full">
      <p id="not-found-runner-instructions" className="text-xs text-zinc-500 mb-3">
        {reducedMotion
          ? 'Motion reduced: static preview of the mini runner.'
          : 'Press Space, tap, or click the game to jump over blocks. Tab to focus the game area first for keyboard play.'}
      </p>
      <div
        ref={containerRef}
        role="application"
        tabIndex={0}
        aria-label="404 mini runner game"
        aria-describedby="not-found-runner-instructions"
        onClick={focusGame}
        className="relative w-full max-w-xl mx-auto outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 rounded-lg"
        style={{ minHeight: HEIGHT, height: HEIGHT }}
      >
        <canvas
          ref={canvasRef}
          width={WIDTH}
          height={HEIGHT}
          className="w-full h-[120px] rounded-lg bg-zinc-50 touch-none"
          aria-hidden={reducedMotion ? undefined : true}
        />
        {reducedMotion && (
          <p className="sr-only">Static mini runner illustration; animation disabled for reduced motion.</p>
        )}
      </div>
      <p className="sr-only" aria-live="polite">
        {liveMessage}
      </p>
      <p className="text-xs text-zinc-500 mt-2 text-center" aria-hidden>
        Score: {score}
      </p>
    </div>
  )
}
