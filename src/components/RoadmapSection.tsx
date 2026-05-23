import { Rocket, Target, TrendingUp, CheckCircle2, Clock, ArrowRight } from 'lucide-react';

const phases = [
  {
    phase: 'Giai đoạn 1',
    period: 'Nay → Tháng 06/2026',
    title: 'Hoàn thiện Kiến trúc & Đóng gói',
    subtitle: 'Product Hardening',
    icon: CheckCircle2,
    gradient: 'from-orange-500 to-amber-600',
    badgeBg: 'bg-orange-50',
    badgeText: 'text-orange-700',
    badgeBorder: 'border-orange-100',
    periodColor: 'text-orange-500',
    dotBg: 'bg-orange-100',
    dotText: 'text-orange-600',
    milestoneBg: 'from-orange-50 to-orange-50/50',
    milestoneBorder: 'border-orange-100',
    milestoneIcon: 'text-orange-600',
    milestoneText: 'text-orange-700',
    status: 'Đang thực hiện',
    statusClass: 'bg-orange-100 text-orange-700 animate-pulse',
    tasks: [
      'Tối ưu hóa giải thuật Circular Dispersion Math trên SQLite',
      'Hoàn thiện 100% logic phê duyệt hai chiều Host/Guest',
      'Biên dịch sản xuất (npm run build) — triệt tiêu lỗi runtime',
      'Alpha Test nội bộ 50 người — tinh chỉnh UX',
    ],
    milestone: 'Sản phẩm sẵn sàng triển khai',
  },
  {
    phase: 'Giai đoạn 2',
    period: 'Tháng 07/2026',
    title: 'Triển khai FPT & 1.000 Người dùng',
    subtitle: 'FPT Launch & Traction',
    icon: Rocket,
    gradient: 'from-amber-700 to-yellow-800',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-800',
    badgeBorder: 'border-amber-100',
    periodColor: 'text-amber-700',
    dotBg: 'bg-amber-100',
    dotText: 'text-amber-700',
    milestoneBg: 'from-amber-50 to-amber-50/50',
    milestoneBorder: 'border-amber-100',
    milestoneIcon: 'text-amber-700',
    milestoneText: 'text-amber-800',
    status: 'Sắp tới',
    statusClass: 'bg-amber-50 text-amber-700',
    tasks: [
      'Deploy Web App công khai qua Edge Network',
      'Đánh chiếm ĐH FPT HCM & ký túc xá Thủ Đức',
      'Tài trợ 3-5 quán cafe ghim sự kiện miễn phí',
      'Kích hoạt Network Effects — 1.000 người dùng thực',
    ],
    milestone: 'Chứng minh tính khả thi mô hình',
  },
  {
    phase: 'Giai đoạn 3',
    period: 'Tháng 08/2026+',
    title: 'Mở rộng & Thương mại hóa',
    subtitle: 'Scalability & Monetization',
    icon: TrendingUp,
    gradient: 'from-stone-600 to-stone-800',
    badgeBg: 'bg-stone-100',
    badgeText: 'text-stone-700',
    badgeBorder: 'border-stone-200',
    periodColor: 'text-stone-500',
    dotBg: 'bg-stone-200',
    dotText: 'text-stone-600',
    milestoneBg: 'from-stone-50 to-stone-50/50',
    milestoneBorder: 'border-stone-200',
    milestoneIcon: 'text-stone-600',
    milestoneText: 'text-stone-700',
    status: 'Kế hoạch',
    statusClass: 'bg-stone-100 text-stone-500',
    tasks: [
      'Mở rộng sang ĐH Quốc gia, HUTECH, UTE...',
      'Kích hoạt Subscription cho Doanh nghiệp bản địa',
      'Hệ thống hoa hồng vé (5-10%) & Boost sự kiện',
      'Đóng gói Mobile App — TestFlight & Google Play',
    ],
    milestone: 'Tự chủ dòng tiền thương mại',
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-stone-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-sm font-medium">
            <Target className="w-4 h-4" />
            Lộ trình Phát triển
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 font-[Space_Grotesk]">
            Roadmap
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-700"> 2026</span>
          </h2>
          <p className="text-lg text-stone-500 max-w-3xl mx-auto">
            Lộ trình 3 giai đoạn chiến lược theo mô hình phát triển tinh gọn (Lean Startup)
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - desktop */}
          <div className="hidden lg:block absolute top-[120px] left-0 right-0 h-1 bg-gradient-to-r from-orange-200 via-amber-200 to-stone-200 rounded-full" />

          <div className="grid lg:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <div key={phase.phase} className="relative">
                {/* Timeline dot - desktop */}
                <div className="hidden lg:flex absolute -top-2 left-1/2 -translate-x-1/2 z-10 items-center justify-center">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${phase.gradient} flex items-center justify-center shadow-lg ring-4 ring-white`}>
                    <phase.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Arrow between phases */}
                {index < 2 && (
                  <div className="hidden lg:flex absolute top-[108px] -right-4 z-20">
                    <ArrowRight className="w-8 h-8 text-stone-300" />
                  </div>
                )}

                {/* Card */}
                <div className="lg:mt-24 bg-white rounded-3xl p-8 border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  {/* Mobile icon */}
                  <div className="lg:hidden flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${phase.gradient} flex items-center justify-center shadow-lg`}>
                      <phase.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Phase header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${phase.badgeBg} ${phase.badgeText} border ${phase.badgeBorder}`}>
                        {phase.phase}
                      </span>
                      <span className={`flex items-center gap-1 text-xs font-medium ${phase.periodColor}`}>
                        <Clock className="w-3 h-3" />
                        {phase.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 mb-1">{phase.title}</h3>
                    <p className={`text-sm ${phase.periodColor} font-medium`}>{phase.subtitle}</p>
                  </div>

                  {/* Tasks */}
                  <div className="space-y-3 mb-6">
                    {phase.tasks.map((task) => (
                      <div key={task} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full ${phase.dotBg} flex items-center justify-center shrink-0 mt-0.5`}>
                          <span className={`${phase.dotText} text-[10px]`}>✓</span>
                        </div>
                        <span className="text-sm text-stone-600">{task}</span>
                      </div>
                    ))}
                  </div>

                  {/* Milestone */}
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${phase.milestoneBg} border ${phase.milestoneBorder}`}>
                    <div className="flex items-center gap-2">
                      <Target className={`w-4 h-4 ${phase.milestoneIcon}`} />
                      <span className={`text-sm font-bold ${phase.milestoneText}`}>Mục tiêu: {phase.milestone}</span>
                    </div>
                  </div>

                  {/* Status badge */}
                  <div className="mt-4 flex justify-end">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${phase.statusClass}`}>
                      {phase.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
