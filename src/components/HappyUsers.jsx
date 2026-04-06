// Using logoipsum.com placeholder logos (free to use)
const logos = [
  {
    id: 1,
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="120" height="30" viewBox="0 0 120 30">
        <circle cx="12" cy="15" r="10" fill="#4F46E5" opacity="0.15"/>
        <path d="M7 15 A5 5 0 0 1 17 15 A5 5 0 0 1 7 15" fill="#4F46E5"/>
        <path d="M12 8 L12 22 M8 12 L16 12" stroke="#4F46E5" strokeWidth="2" fill="none"/>
        <text x="28" y="20" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="600" fill="#111">Logoipsum</text>
      </svg>
    ),
  },
  {
    id: 2,
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="140" height="30" viewBox="0 0 140 30">
        <rect x="2" y="5" width="20" height="20" rx="4" fill="#22C55E"/>
        <text x="4" y="20" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="800" fill="white">+</text>
        <text x="28" y="20" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="800" fill="#111" letterSpacing="1">LOGOIPSUM</text>
      </svg>
    ),
  },
  {
    id: 3,
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="130" height="30" viewBox="0 0 130 30">
        <circle cx="12" cy="15" r="10" fill="#7C3AED" opacity="0.2"/>
        <circle cx="12" cy="15" r="6" fill="#7C3AED"/>
        <circle cx="12" cy="15" r="3" fill="white"/>
        <text x="28" y="20" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="600" fill="#111">Logoipsum</text>
      </svg>
    ),
  },
  {
    id: 4,
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="130" height="30" viewBox="0 0 130 30">
        <path d="M2 15 A10 10 0 0 1 22 15" fill="#0EA5E9" opacity="0.3"/>
        <circle cx="12" cy="15" r="7" fill="none" stroke="#0EA5E9" strokeWidth="3"/>
        <circle cx="12" cy="8" r="3" fill="#0EA5E9"/>
        <text x="28" y="20" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="600" fill="#111">Logoipsum</text>
      </svg>
    ),
  },
  {
    id: 5,
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="140" height="30" viewBox="0 0 140 30">
        <text x="0" y="20" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="400" fill="#111">logo</text>
        <rect x="34" y="6" width="16" height="16" rx="3" fill="#22C55E"/>
        <text x="42" y="15" fontFamily="sans-serif" fontSize="11" fontWeight="800" fill="white" textAnchor="middle" dominantBaseline="middle">✦</text>
        <text x="52" y="20" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="400" fill="#111"> ipsum</text>
        <text x="118" y="14" fontFamily="sans-serif" fontSize="8" fill="#888">™</text>
      </svg>
    ),
  },
  {
    id: 6,
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="130" height="30" viewBox="0 0 130 30">
        <path d="M15 5 L5 25 L15 20 L25 25 Z" fill="#DC2626"/>
        <path d="M15 5 L25 25 L15 20 Z" fill="#991B1B"/>
        <text x="32" y="20" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="600" fill="#111">Logoipsum</text>
      </svg>
    ),
  },
  {
    id: 7,
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="130" height="30" viewBox="0 0 130 30">
        <path d="M5 22 C5 22 10 8 15 15 C20 22 25 8 25 8" stroke="#EA580C" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <circle cx="5" cy="22" r="3" fill="#EA580C"/>
        <text x="32" y="20" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="600" fill="#111">Logoipsum</text>
      </svg>
    ),
  },
]

function HeaderBar() {
  return (
    <div className="flex justify-between items-center mb-5">
      <span className="text-[18px] uppercase tracking-widest text-gray-500 font-medium">Happy Users</span>
      <span className="text-[10px] uppercase tracking-widest text-gray-400">©2025 <span className="font-semibold text-gray-500">Case-Themes™</span> Studio</span>
    </div>
  )
}

function LogoGrid() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {logos.map((logo, i) => (
          <div
            key={logo.id}
            className="flex items-center justify-center h-28 border-b border-r border-gray-100 last:border-r-0"
            style={{
              borderRight: (i + 1) % 4 === 0 ? 'none' : undefined,
            }}
          >
            {logo.svg}
          </div>
        ))}
        {/* CTA cell */}
        <div className="flex flex-col items-center justify-center h-28 border-b border-gray-100 text-center px-4">
          <p className="text-[9px] text-gray-400 uppercase tracking-widest leading-snug mb-1">Next can be you.</p>
          <p className="text-[11px] font-bold text-gray-700 uppercase tracking-widest">Let's Talk</p>
        </div>
      </div>
    </div>
  )
}

function VideoReelCard() {
  return (
    <div className="relative mt-5 rounded-2xl overflow-hidden h-65 sm:h-90 lg:h-105 group cursor-pointer">
      {/* Base image */}
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
        alt="Video reel"
        className="absolute inset-0 w-full h-full object-cover object-center transition duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-0"
      />
      {/* Blurred + dimmed image — fades in on hover */}
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center blur-sm brightness-50 scale-105 opacity-0 transition duration-700 ease-in-out group-hover:opacity-100"
      />

      {/* Single play button — only visible at center on hover */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div
          className="bg-white/90 backdrop-blur-sm rounded-full px-5 py-2.5 flex items-center gap-2.5 shadow-lg opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
          style={{ transition: 'opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)' }}
        >
          <span className="w-7 h-7 bg-black rounded-full flex items-center justify-center shrink-0">
            <svg className="w-2.5 h-2.5 fill-white ml-px" viewBox="0 0 16 16">
              <path d="M4 2l10 6-10 6V2z"/>
            </svg>
          </span>
          <span className="text-[11px] font-bold uppercase tracking-widest text-gray-900">Play Reel</span>
        </div>
      </div>
    </div>
  )
}

export default function HappyUsers() {
  return (
    <section className="bg-gray-100 px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
      <div className="max-w-5xl mx-auto">
        <HeaderBar />
        <LogoGrid />
        <VideoReelCard />
      </div>
    </section>
  )
}
