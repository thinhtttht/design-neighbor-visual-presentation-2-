import { TrendingUp, Target, Users, Globe } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';

const lbsGrowthData = [
  { year: '2022', value: 25 },
  { year: '2023', value: 31 },
  { year: '2024', value: 38 },
  { year: '2025', value: 47 },
  { year: '2026', value: 58 },
  { year: '2027', value: 72 },
  { year: '2028', value: 89 },
];

const competitorData = [
  { metric: 'Tốc độ kết nối', neighbor: 95, facebook: 20, tinder: 30 },
  { metric: 'Kết nối nhóm', neighbor: 90, facebook: 40, tinder: 10 },
  { metric: 'Dựa trên vị trí', neighbor: 95, facebook: 15, tinder: 70 },
  { metric: 'Thời gian thực', neighbor: 90, facebook: 25, tinder: 20 },
  { metric: 'Đô thị mapping', neighbor: 85, facebook: 10, tinder: 5 },
  { metric: 'Bản địa hóa', neighbor: 90, facebook: 30, tinder: 15 },
];

const marketStats = [
  { value: '2.5M+', label: 'Giới trẻ 15-30 tại TP.HCM', detail: 'Chiếm 25% dân số thành phố', icon: Users, iconBg: 'bg-orange-50', iconColor: 'text-orange-500', valueColor: 'text-orange-600' },
  { value: '23.4%', label: 'CAGR ngành LBS toàn cầu', detail: 'Tăng trưởng bùng nổ', icon: TrendingUp, iconBg: 'bg-amber-50', iconColor: 'text-amber-700', valueColor: 'text-amber-700' },
  { value: '#1', label: 'Xu hướng "Real Life Socializing"', detail: 'Bão hòa video ngắn thụ động', icon: Target, iconBg: 'bg-yellow-50', iconColor: 'text-yellow-700', valueColor: 'text-yellow-700' },
  { value: '∞', label: 'Tiềm năng mở rộng đô thị', detail: 'Áp dụng cho mọi thành phố lớn', icon: Globe, iconBg: 'bg-stone-100', iconColor: 'text-stone-600', valueColor: 'text-stone-700' },
];

export default function MarketSection() {
  return (
    <section id="market" className="relative py-24 lg:py-32 bg-gradient-to-b from-stone-50 to-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-orange-50 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-sm font-medium">
            <TrendingUp className="w-4 h-4" />
            Tiềm năng Thị trường
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 font-[Space_Grotesk]">
            Thị trường
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-700"> tỷ đô</span>
          </h2>
          <p className="text-lg text-stone-500 max-w-3xl mx-auto">
            Ngành dịch vụ dựa trên vị trí toàn cầu đang tăng trưởng bùng nổ, 
            đón đầu xu hướng "Socializing in Real Life"
          </p>
        </div>

        {/* Market Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {marketStats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-3xl p-6 border border-stone-100 shadow-sm text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className={`w-14 h-14 rounded-2xl ${stat.iconBg} flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-7 h-7 ${stat.iconColor}`} />
              </div>
              <p className={`text-3xl font-bold ${stat.valueColor} mb-2 font-[Space_Grotesk]`}>{stat.value}</p>
              <p className="text-sm font-medium text-stone-800 mb-1">{stat.label}</p>
              <p className="text-xs text-stone-400">{stat.detail}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* LBS Growth Chart */}
          <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-stone-900">Tăng trưởng Ngành Location-Based Services</h3>
              <p className="text-sm text-stone-400">Quy mô thị trường toàn cầu (tỷ USD) — CAGR 23.4%</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={lbsGrowthData}>
                <defs>
                  <linearGradient id="lbsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EA580C" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#EA580C" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f0eb" />
                <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#78716C' }} />
                <YAxis tick={{ fontSize: 12, fill: '#78716C' }} unit="B" />
                <Tooltip
                  contentStyle={{
                    borderRadius: '12px',
                    border: 'none',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                    padding: '12px 16px',
                  }}
                  formatter={(value) => [`$${value}B`, 'Quy mô thị trường']}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#EA580C"
                  strokeWidth={3}
                  fill="url(#lbsGradient)"
                  dot={{ r: 5, fill: '#EA580C', stroke: '#fff', strokeWidth: 2 }}
                  activeDot={{ r: 7 }}
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-4 p-4 bg-orange-50 rounded-2xl">
              <p className="text-sm text-orange-800">
                📊 Thị trường LBS dự kiến đạt <strong>$89B vào 2028</strong> — NEIGHBOR đón đầu chính xác xu hướng này
              </p>
            </div>
          </div>

          {/* Competitor Radar */}
          <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-stone-900">So sánh Đối thủ Cạnh tranh</h3>
              <p className="text-sm text-stone-400">Điểm số năng lực trên 6 tiêu chí cốt lõi</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={competitorData}>
                <PolarGrid stroke="#e7e5e4" />
                <PolarAngleAxis dataKey="metric" tick={{ fontSize: 10, fill: '#78716C' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10, fill: '#a8a29e' }} />
                <Radar name="NEIGHBOR" dataKey="neighbor" stroke="#EA580C" fill="#EA580C" fillOpacity={0.25} strokeWidth={2} />
                <Radar name="Facebook Groups" dataKey="facebook" stroke="#78716C" fill="#78716C" fillOpacity={0.1} strokeWidth={1.5} />
                <Radar name="Tinder/Bumble" dataKey="tinder" stroke="#D6D3D1" fill="#D6D3D1" fillOpacity={0.1} strokeWidth={1.5} />
                <Legend
                  verticalAlign="bottom"
                  formatter={(value: string) => <span className="text-xs text-stone-600">{value}</span>}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: '12px',
                    border: 'none',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                    padding: '12px 16px',
                    fontSize: '12px',
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
            <div className="mt-4 p-4 bg-orange-50 rounded-2xl">
              <p className="text-sm text-orange-800">
                🏆 NEIGHBOR vượt trội trên <strong>tất cả 6 tiêu chí</strong> — đặc biệt ở Tốc độ kết nối và Đô thị mapping
              </p>
            </div>
          </div>
        </div>

        {/* Trend Quote */}
        <div className="mt-16 bg-gradient-to-r from-stone-800 to-stone-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-[Space_Grotesk]">
                Xu hướng "Socializing in Real Life"
              </h3>
              <p className="text-stone-300 leading-relaxed">
                Người trẻ đang bão hòa và kiệt sức vì tiêu thụ video ngắn thụ động. 
                Họ có xu hướng mạnh mẽ chuyển dịch sang lối sống tìm kiếm các kết nối vật lý chân thực. 
                <strong className="text-orange-400"> Neighbor đón đầu chính xác điểm gãy này.</strong>
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.pexels.com/photos/6140369/pexels-photo-6140369.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600"
                alt="Friends walking together"
                className="rounded-2xl shadow-2xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
