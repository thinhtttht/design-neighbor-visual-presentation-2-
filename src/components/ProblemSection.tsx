import { AlertTriangle, Clock, MessageSquareX, TrendingDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';

const lonelinessData = [
  { age: '15-20', rate: 55, fill: '#EA580C' },
  { age: '21-25', rate: 48, fill: '#F97316' },
  { age: '26-30', rate: 42, fill: '#FB923C' },
  { age: '31-40', rate: 30, fill: '#D97706' },
  { age: '41-50', rate: 25, fill: '#B45309' },
  { age: '50+', rate: 20, fill: '#92400E' },
];

const matchFailureData = [
  { name: 'Thất bại\n(Bị chôn vùi)', value: 95, fill: '#DC2626' },
  { name: 'Thành công', value: 5, fill: '#EA580C' },
];

const frictionData = [
  { platform: 'Facebook Groups', time: 15, unit: 'phút bị chôn', color: '#78716C' },
  { platform: 'Tinder/Bumble', time: 72, unit: 'giờ match→gặp', color: '#A8A29E' },
  { platform: 'Zalo Groups', time: 20, unit: 'phút bị loãng', color: '#D6D3D1' },
  { platform: 'NEIGHBOR', time: 3, unit: 'phút chốt kèo', color: '#EA580C' },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="relative py-24 lg:py-32 bg-gradient-to-b from-stone-50 to-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-700 text-sm font-medium">
            <AlertTriangle className="w-4 h-4" />
            Vấn đề cần giải quyết
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 font-[Space_Grotesk]">
            Thế hệ trẻ đang
            <span className="text-red-500"> mất kết nối</span>
          </h2>
          <p className="text-lg text-stone-500 max-w-3xl mx-auto leading-relaxed">
            Giới trẻ đô thị sống trong cụm dân cư dày đặc nhưng lại thiếu công cụ kỹ thuật số 
            để kết nối nhanh với thế giới vật lý quanh mình
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Problem 1 */}
          <div className="group relative bg-white rounded-3xl p-8 border border-stone-100 shadow-sm hover:shadow-xl hover:shadow-red-100/50 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-rose-500 rounded-t-3xl" />
            <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
              <TrendingDown className="w-7 h-7 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Cô đơn Đạt Đỉnh Lịch Sử</h3>
            <p className="text-stone-500 leading-relaxed text-sm">
              Theo McKinsey Health Institute, giới trẻ 15-30 tuổi có mức độ cô đơn cao nhất — 
              lên tới <span className="font-bold text-red-600">55%</span>. Sinh viên xa nhà, người đi làm trẻ tại 
              đô thị hoàn toàn thiếu công cụ kết nối nhanh.
            </p>
            <div className="mt-6">
              <img
                src="https://images.pexels.com/photos/6958624/pexels-photo-6958624.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500"
                alt="Lonely young person"
                className="w-full h-40 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Problem 2 */}
          <div className="group relative bg-white rounded-3xl p-8 border border-stone-100 shadow-sm hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-amber-500 rounded-t-3xl" />
            <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
              <MessageSquareX className="w-7 h-7 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Thuật toán Bất lực</h3>
            <p className="text-stone-500 leading-relaxed text-sm">
              Bài đăng tìm nhóm trên Facebook/Zalo bị thuật toán dòng thời gian 
              <span className="font-bold text-orange-600"> chôn vùi sau 10-15 phút</span> do 
              hỗn loạn dữ liệu (tin rác, quảng cáo). Tỷ lệ thành công dưới 5%.
            </p>
            <div className="mt-6 p-4 bg-orange-50 rounded-2xl">
              <p className="text-xs text-orange-400 mb-2 font-medium">Tỷ lệ điều phối thành công trên hội nhóm</p>
              <div className="flex items-center gap-4">
                <ResponsiveContainer width="100%" height={120}>
                  <PieChart>
                    <Pie
                      data={matchFailureData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={50}
                      paddingAngle={3}
                      dataKey="value"
                      stroke="none"
                    >
                      {matchFailureData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Legend 
                      verticalAlign="bottom" 
                      height={24} 
                      formatter={(value) => <span className="text-[10px] text-stone-600">{value}</span>}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Problem 3 */}
          <div className="group relative bg-white rounded-3xl p-8 border border-stone-100 shadow-sm hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-yellow-700 rounded-t-3xl" />
            <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mb-6">
              <Clock className="w-7 h-7 text-amber-700" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Ma Sát "Quẹt để Match"</h3>
            <p className="text-stone-500 leading-relaxed text-sm">
              Tinder, Bumble BFF bắt người dùng nhắn tin 1-1 kéo dài 
              <span className="font-bold text-amber-700"> 3-5 ngày</span> để xây dựng lòng tin. 
              Quy trình quá chậm, thất bại hoàn toàn trước nhu cầu kết nối nhóm tự phát.
            </p>
            <div className="mt-6">
              <img
                src="https://images.pexels.com/photos/7350910/pexels-photo-7350910.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500"
                alt="Social media exhaustion"
                className="w-full h-40 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Loneliness Chart */}
          <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-stone-900">Tỷ lệ Cô đơn theo Nhóm Tuổi</h3>
              <p className="text-sm text-stone-400">Nguồn: McKinsey Health Institute Report</p>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={lonelinessData} barCategoryGap="20%">
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f0eb" />
                <XAxis dataKey="age" tick={{ fontSize: 12, fill: '#78716C' }} />
                <YAxis tick={{ fontSize: 12, fill: '#78716C' }} unit="%" />
                <Tooltip
                  contentStyle={{
                    borderRadius: '12px',
                    border: 'none',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                    padding: '12px 16px',
                  }}
                  formatter={(value) => [`${value}%`, 'Tỷ lệ cô đơn']}
                />
                <Bar dataKey="rate" radius={[8, 8, 0, 0]}>
                  {lonelinessData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 p-4 bg-orange-50 rounded-2xl flex items-start gap-3">
              <span className="text-2xl">⚠️</span>
              <p className="text-sm text-orange-800">
                Nhóm <strong>15-30 tuổi</strong> có tỷ lệ cô đơn cao nhất (42-55%) — 
                chính xác là phân khúc mục tiêu của NEIGHBOR
              </p>
            </div>
          </div>

          {/* Friction Comparison */}
          <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-stone-900">So sánh Ma sát Thời gian</h3>
              <p className="text-sm text-stone-400">Thời gian từ lúc có nhu cầu → chốt được kèo</p>
            </div>
            <div className="space-y-5">
              {frictionData.map((item) => (
                <div key={item.platform} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-stone-700">{item.platform}</span>
                    <span className="text-sm font-bold" style={{ color: item.color }}>
                      {item.time} {item.unit}
                    </span>
                  </div>
                  <div className="h-4 bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${(item.time / 72) * 100}%`,
                        backgroundColor: item.color,
                        minWidth: '8%',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-orange-50 rounded-2xl flex items-start gap-3">
              <span className="text-2xl">🚀</span>
              <p className="text-sm text-orange-800">
                NEIGHBOR giảm thời gian chốt kèo xuống chỉ còn <strong>3 phút</strong> — 
                nhanh hơn <strong>24x</strong> so với Tinder/Bumble
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
