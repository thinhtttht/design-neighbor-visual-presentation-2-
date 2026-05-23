import { MapPin, ArrowDown, Sparkles, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/neighbor-hero.jpg"
          alt="Neighbor Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/90 via-amber-950/80 to-orange-950/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        
        {/* Floating map pins */}
        {[
          { top: '15%', left: '8%', delay: '0s', size: 'w-8 h-8' },
          { top: '25%', right: '12%', delay: '1s', size: 'w-6 h-6' },
          { top: '60%', left: '5%', delay: '2s', size: 'w-7 h-7' },
          { top: '70%', right: '8%', delay: '0.5s', size: 'w-5 h-5' },
          { top: '40%', right: '20%', delay: '1.5s', size: 'w-6 h-6' },
        ].map((pin, i) => (
          <div
            key={i}
            className={`absolute ${pin.size} text-orange-400/30 animate-bounce-pin`}
            style={{ top: pin.top, left: pin.left, right: pin.right, animationDelay: pin.delay }}
          >
            <MapPin className="w-full h-full" />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Competition Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="font-medium">Cuộc thi Ý tưởng Khởi nghiệp Sinh viên</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold">INNOSTAR 2026</span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="font-[Space_Grotesk] text-6xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[0.9]">
                NEIGH
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400">
                  BOR
                </span>
              </h1>
              <div className="flex items-center gap-3">
                <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full" />
                <p className="text-orange-200/90 text-lg font-medium tracking-wide">
                  Spatiotemporal Social Network
                </p>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl text-white/80 font-light leading-relaxed max-w-xl">
              Mở bản đồ xanh, lập kèo nhanh, 
              <br />
              <span className="text-orange-300 font-medium">kết bạn lành</span> cùng Neighbor
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 pt-2">
              {[
                { value: '2.5M+', label: 'Đối tượng mục tiêu', icon: '👥' },
                { value: '23.4%', label: 'CAGR ngành LBS', icon: '📈' },
                { value: '55%', label: 'Giới trẻ cô đơn', icon: '💔' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <span className="text-2xl">{stat.icon}</span>
                  <div>
                    <p className="text-white font-bold text-lg leading-tight">{stat.value}</p>
                    <p className="text-white/50 text-xs">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#problem" className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold rounded-2xl shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105">
                <Zap className="w-5 h-5" />
                Khám phá Dự án
              </a>
              <a href="#team" className="inline-flex items-center gap-2 px-6 py-4 border border-white/20 text-white/80 font-medium rounded-2xl hover:bg-white/10 transition-all duration-300">
                Đội ngũ sáng lập
              </a>
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              {/* Phone frame */}
              <div className="relative w-[280px] sm:w-[320px] rounded-[2.5rem] overflow-hidden border-[8px] border-stone-800 shadow-2xl shadow-black/50 animate-pulse-glow">
                <img
                  src="/images/neighbor-map-ui.jpg"
                  alt="Neighbor App Interface"
                  className="w-full aspect-[9/19] object-cover"
                />
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-stone-800 rounded-b-2xl" />
              </div>

              {/* Floating notification cards */}
              <div className="absolute -left-16 top-1/4 px-4 py-3 bg-white rounded-2xl shadow-xl shadow-orange-900/20 max-w-[180px] animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm">⚽</div>
                  <div>
                    <p className="text-xs font-bold text-stone-800">Đá bóng 5v5</p>
                    <p className="text-[10px] text-orange-600">Cách 200m • 3 slot</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-12 top-1/2 px-4 py-3 bg-white rounded-2xl shadow-xl shadow-orange-900/20 max-w-[180px] animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-sm">📚</div>
                  <div>
                    <p className="text-xs font-bold text-stone-800">Học nhóm AI</p>
                    <p className="text-[10px] text-amber-700">Quán cafe • 2/4 người</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-8 bottom-1/4 px-4 py-3 bg-white rounded-2xl shadow-xl shadow-orange-900/20 max-w-[180px] animate-float" style={{ animationDelay: '3s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-sm">🎵</div>
                  <div>
                    <p className="text-xs font-bold text-stone-800">Live Music</p>
                    <p className="text-[10px] text-rose-600">Đang diễn ra • 500m</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Cuộn xuống</span>
          <ArrowDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}
