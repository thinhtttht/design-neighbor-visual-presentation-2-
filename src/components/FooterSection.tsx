import { MapPin, Heart } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="relative bg-stone-900 text-white overflow-hidden">
      {/* CTA Banner */}
      <div className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/15 to-amber-700/15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[Space_Grotesk] mb-6">
            Mở bản đồ xanh,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              lập kèo nhanh
            </span>
          </h2>
          <p className="text-lg text-stone-300 max-w-2xl mx-auto mb-8">
            Kết bạn lành cùng Neighbor — Nền tảng Mạng xã hội Không gian & Thời gian thực 
            đầu tiên dành cho giới trẻ đô thị Việt Nam
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold rounded-2xl shadow-2xl shadow-orange-500/30 text-lg">
              🚀 NEIGHBOR — Coming Soon
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-700 flex items-center justify-center shadow-lg">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-lg font-[Space_Grotesk]">NEIGHBOR</p>
              <p className="text-xs text-stone-400">Spatiotemporal Social Network</p>
            </div>
          </div>

          {/* Info */}
          <div className="text-center space-y-2">
            <p className="text-sm text-stone-400">
              Bản mô tả Ý tưởng/Dự án — Cuộc thi InnoStar 2026
            </p>
            <p className="text-xs text-stone-500">
              Thành phố Hồ Chí Minh, ngày 22 tháng 05 năm 2026
            </p>
          </div>

          {/* Signature */}
          <div className="text-right">
            <p className="text-sm text-stone-400 mb-1">Trưởng nhóm Ý tưởng/Dự án</p>
            <p className="text-lg font-bold text-orange-400 font-[Space_Grotesk]">Nguyễn Văn Thịnh</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500 flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-orange-500 fill-orange-500" /> by NEIGHBOR Team
          </p>
          <p className="text-xs text-stone-500">
            © 2026 NEIGHBOR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
