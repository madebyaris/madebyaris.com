const CAPABILITIES = [
  'CUSTOM AI AGENTS',
  'MCP SERVERS & TOOLING',
  'LLM EVALS & SPEND CAPS',
  'PRODUCTION RAG SYSTEMS',
  'NEXT.JS 16 & REACT',
  'RUST CLI & TAURI APPS',
  'GEO & AI SEARCH (AEO)',
  'CURSOR TEAM ENABLEMENT',
  'FASTIFY & POSTGRESQL',
  'HEADLESS WORDPRESS',
]

export function CapabilityMarquee() {
  return (
    <div
      aria-label="Core agency engineering capabilities"
      className="relative overflow-hidden rounded-xl border border-[#E5E7EB] bg-white py-3 mb-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent"
      />

      <div className="agency-marquee flex w-max items-center gap-8">
        {[...CAPABILITIES, ...CAPABILITIES].map((item, idx) => (
          <div
            key={`${item}-${idx}`}
            className="inline-flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.14em] text-[#4B5563]"
          >
            <span className="inline-flex items-center gap-2.5 whitespace-nowrap">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3A57FC]" />
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
