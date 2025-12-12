export function MiniMaxIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      {...props}
    >
      {/* Simple audio-wave mark to represent MiniMax */}
      <path
        d="M6 16V8M9 18V6M12 20V4M15 18V6M18 16V8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

