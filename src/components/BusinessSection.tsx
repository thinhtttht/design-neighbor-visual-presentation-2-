import { Store, Ticket, Megaphone, ArrowRight } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const revenueStreams = [
  {
    icon: Store,
    title: 'Gói Doanh nghiệp Tháng',
    subtitle: 'Sponsored Events Subscription',
    description: 'Cửa hàng, quán cafe, sân thể thao mua gói tháng để tạo sự kiện trên bản đồ Neighbor, kéo giới trẻ đổ về vào giờ vắng khách.',
    percentage: '40%',
    gradient: 'from-orange-500 to-amber-600',
    accentColor: 'text-orange-600',
    subtitleColor: 'text-orange-500',
  },
  {
    icon: Ticket,
    title: 'Hoa hồng Vé Sự kiện',
    subtitle: 'Ticket Commission (5-10%)',
    description: 'Thu phí 5-10% trên mỗi giao dịch vé cho các sự kiện có thu phí: workshop, giải đấu mini, CLB trò chơi trí tuệ.',
    percentage: '35%',
    gradient: 'from-amber-700 to-yellow-800',
    accentColor: 'text-amber-700',
    subtitleColor: 'text-amber-600',
  },
  {
    icon: Megaphone,
    title: 'Boost Ghim Sự kiện',
    subtitle: 'Event/Incident Boosting',
    description: 'Thanh toán siêu nhỏ (micro-payment) để đẩy sự kiện phát sáng rực rỡ hơn trên bản đồ toàn thành phố, tăng bán kính tiếp cận 3x.',
    percentage: '25%',
    gradient: 'from-stone-600 to-stone-800',
    accentColor: 'text-stone-700',
    subtitleColor: 'text-stone-500',
  },
];

const revenueChartData = [
  { name: 'Gói Doanh nghiệp', value: 40, fill: '#EA580C' },
  { name: 'Hoa hồng Vé', value: 35, fill: '#B45309' },
  { name: 'Boost Sự kiện', value: 25, fill: '#78716C' },
];

const customerSegments = [
  {
    type: 'B2C',
    title: 'Giới trẻ Đô thị',
    age: '15-30 tuổi',
    size: '2.5M+ tại TP.HCM',
    segments: ['Học sinh THPT', 'Sinh viên ĐH/CĐ', 'Người đi làm trẻ'],
    badgeBg: 'bg-orange-100',
    badgeText: 'text-orange-700',
    borderColor: 'border-orange-100',
    emoji: '🧑‍🎓',
  },
  {
    type: 'B2B',
    title: 'Doanh nghiệp Bản địa',
    age: 'SMEs & Hộ kinh doanh',
    size: 'Hàng trăm nghìn hộ',
    segments: ['Quán cafe/Tiệm ăn', 'Sân thể thao', 'Trung tâm kỹ năng'],
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-800',
    borderColor: 'border-amber-100',
    emoji: '🏪',
  },
];

export default function BusinessSection() {
  return (
    <section id="business" className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-stone-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-orange-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-sm font-medium">
            <Store className="w-4 h-4" />
            Mô hình Kinh doanh
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 font-[Space_Grotesk]">
            Hyperlocal
            <span className="text-gradient"> Platform Marketplace</span>
          </h2>
          <p className="text-lg text-stone-500 max-w-3xl mx-auto">
            Nền tảng siêu cục bộ tự chủ dòng tiền thông qua thương mại hóa sự kiện bản địa
          </p>
        </div>

        {/* Business Model Visual */}
        <div className="grid lg:grid-cols-5 gap-8 mb-20">
          {/* Left: Image */}
          <div className="lg:col-span-2">
            <img
              src="/images/business-model.jpg"
              alt="Business Model"
              className="w-full h-full min-h-[300px] object-cover rounded-3xl shadow-xl"
            />
          </div>

          {/* Right: Customer Segments */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-2xl font-bold text-stone-900">Chân dung Khách hàng</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {customerSegments.map((seg) => (
                <div key={seg.type} className={`bg-white rounded-3xl p-6 border ${seg.borderColor} shadow-sm`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{seg.emoji}</span>
                    <div>
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${seg.badgeBg} ${seg.badgeText} mb-1`}>
                        {seg.type}
                      </span>
                      <h4 className="font-bold text-stone-900">{seg.title}</h4>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-stone-500">Độ tuổi: <span className="font-semibold text-stone-700">{seg.age}</span></p>
                    <p className="text-sm text-stone-500">Quy mô: <span className="font-semibold text-stone-700">{seg.size}</span></p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {seg.segments.map((s) => (
                      <span key={s} className="px-3 py-1 bg-stone-50 rounded-full text-xs text-stone-600 border border-stone-100">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Revenue Streams */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Revenue Chart */}
          <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
            <h3 className="text-xl font-bold text-stone-900 mb-2">Cơ cấu Doanh thu Dự kiến</h3>
            <p className="text-sm text-stone-400 mb-6">Phân bổ nguồn thu theo 3 trụ cột chính</p>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={revenueChartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={120}
                  paddingAngle={4}
                  dataKey="value"
                  stroke="none"
                >
                  {revenueChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: '12px',
                    border: 'none',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                    padding: '12px 16px',
                  }}
                  formatter={(value) => [`${value}%`, 'Tỷ trọng']}
                />
                <Legend 
                  verticalAlign="bottom"
                  formatter={(value: string) => <span className="text-sm text-stone-600">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Revenue Cards */}
          <div className="space-y-6">
            {revenueStreams.map((stream) => (
              <div key={stream.title} className="group bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-x-1">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stream.gradient} flex items-center justify-center shrink-0 text-white shadow-lg`}>
                    <stream.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-stone-900">{stream.title}</h4>
                      <span className={`text-lg font-bold ${stream.accentColor}`}>{stream.percentage}</span>
                    </div>
                    <p className={`text-xs ${stream.subtitleColor} font-medium mb-2`}>{stream.subtitle}</p>
                    <p className="text-sm text-stone-500">{stream.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Flow Arrow */}
            <div className="flex items-center gap-3 px-6 py-4 bg-orange-50 rounded-2xl border border-orange-100">
              <ArrowRight className="w-5 h-5 text-orange-600 shrink-0" />
              <p className="text-sm text-orange-800">
                <strong>Mục tiêu:</strong> Tự chủ dòng tiền hoàn toàn từ việc thương mại hóa các sự kiện bản địa siêu cục bộ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
