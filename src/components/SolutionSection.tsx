import { Map, MessageCircle, Zap, Eye, Users, Globe } from 'lucide-react';

const features = [
  {
    icon: Map,
    title: 'Bản đồ Tương tác Thời gian thực',
    subtitle: 'Spatial-First Interface',
    description: 'Đặt bản đồ tương tác làm giao diện cốt lõi. Người dùng nhìn vào là bao quát ngay toàn bộ "mật độ hoạt động" và phân bổ địa lý của sự kiện xung quanh mình.',
    gradient: 'from-orange-500 to-amber-600',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    iconColor: 'text-orange-600',
    subtitleColor: 'text-orange-500',
  },
  {
    icon: MessageCircle,
    title: 'Chat Xóm',
    subtitle: 'Neighborhood Chat Rooms',
    description: 'Phòng chat cộng đồng phân mảnh theo vị trí địa lý — kết nối cư dân trong bán kính lân cận để trao đổi, hỗ trợ và tổ chức hoạt động chung.',
    gradient: 'from-amber-700 to-yellow-800',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    iconColor: 'text-amber-700',
    subtitleColor: 'text-amber-600',
  },
  {
    icon: Zap,
    title: 'Biến động Thời gian thực',
    subtitle: 'Real-time Urban Events',
    description: 'Mọi biến động đô thị — kẹt xe, hàng rong, biểu diễn đường phố, xả hàng giờ chót — được cập nhật tức thì lên bản đồ bởi người dùng tại thực địa.',
    gradient: 'from-yellow-600 to-orange-600',
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    iconColor: 'text-yellow-700',
    subtitleColor: 'text-yellow-600',
  },
  {
    icon: Eye,
    title: 'Hẹn Mở — Đăng ký Minh bạch',
    subtitle: 'Open Event System',
    description: 'Tổ chức sự kiện nhóm quy mô nhỏ (học nhóm, thể thao, giao lưu) với hệ thống quản lý hai chiều linh hoạt: Host duyệt, Guest đăng ký.',
    gradient: 'from-stone-600 to-stone-800',
    bg: 'bg-stone-100',
    border: 'border-stone-200',
    iconColor: 'text-stone-600',
    subtitleColor: 'text-stone-500',
  },
  {
    icon: Users,
    title: 'Kết nối Nhóm Tự phát',
    subtitle: 'Spontaneous Group Matching',
    description: 'Loại bỏ mô hình "quẹt match 1-1" chậm trễ. Người dùng tham gia trực tiếp vào các hoạt động nhóm chỉ bằng 1 chạm trên bản đồ.',
    gradient: 'from-rose-500 to-orange-500',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    iconColor: 'text-rose-500',
    subtitleColor: 'text-rose-400',
  },
  {
    icon: Globe,
    title: 'Bản đồ Động lực Đô thị',
    subtitle: 'Dynamic Urban Mapping',
    description: 'Toàn bộ cư dân tham gia đều nhìn thấy biến động đô thị nảy số trực thời trên bản đồ — nắm bắt dòng chảy sinh hoạt theo từng giây.',
    gradient: 'from-amber-600 to-stone-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    iconColor: 'text-amber-700',
    subtitleColor: 'text-amber-500',
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="relative py-24 lg:py-32 bg-gradient-to-b from-white via-orange-50/20 to-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-orange-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-amber-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-sm font-medium">
            <Zap className="w-4 h-4" />
            Giải pháp đột phá
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 font-[Space_Grotesk]">
            Mạng xã hội
            <span className="text-gradient"> Không gian & Thời gian</span>
          </h2>
          <p className="text-lg text-stone-500 max-w-3xl mx-auto leading-relaxed">
            Neighbor tiên phong xây dựng mô hình <strong>Spatiotemporal Social Network</strong> — 
            loại bỏ hoàn toàn "Dòng thời gian phẳng" cũ kỹ, thay bằng bản đồ tương tác thời gian thực
          </p>
        </div>

        {/* Comparison Visual */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Old Way */}
          <div className="relative bg-stone-800 rounded-3xl p-8 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <span className="text-xl">❌</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">MXH Truyền thống</h3>
                  <p className="text-xs text-stone-400">Linear Timeline Feed</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  'Bài đăng bị chôn vùi sau 10-15 phút',
                  'Phải đọc text để hình dung địa điểm',
                  'Nhắn tin 1-1 kéo dài 3-5 ngày',
                  'Không có khả năng lọc theo vị trí',
                  'Tỷ lệ chốt kèo thành công dưới 5%',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-stone-300">
                    <span className="text-red-400 mt-0.5 shrink-0">✕</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Neighbor Way */}
          <div className="relative bg-gradient-to-br from-orange-500 to-amber-700 rounded-3xl p-8 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <span className="text-xl">✨</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">NEIGHBOR</h3>
                  <p className="text-xs text-orange-100">Spatiotemporal Social Network</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  'Sự kiện hiển thị vĩnh viễn cho tới khi hết hạn',
                  'Bản đồ trực quan — nhìn là biết khoảng cách',
                  'Tham gia nhóm chỉ 1 chạm — 3 phút chốt kèo',
                  'Lọc thông minh theo bán kính vị trí thực',
                  'Tỷ lệ kết nối thành công tăng >20x',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-orange-50">
                    <span className="text-yellow-300 mt-0.5 shrink-0">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Showcase with image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <img
              src="/images/chat-xom-feature.jpg"
              alt="Chat Xóm Feature"
              className="rounded-3xl shadow-2xl shadow-orange-900/20 w-full"
            />
            <div className="absolute -bottom-4 -right-4 px-6 py-3 bg-white rounded-2xl shadow-xl border border-orange-100">
              <p className="text-sm font-bold text-orange-700">🏘️ Chat Xóm — Tính năng đột phá</p>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-stone-900 font-[Space_Grotesk]">
              Biến mọi góc phố thành 
              <span className="text-gradient"> cộng đồng sống</span>
            </h3>
            <p className="text-stone-500 leading-relaxed">
              Tính năng "Chat Xóm" và Bản đồ Động lực Đô thị là điểm đột phá chưa từng có trên thị trường.
              Mọi biến động vật lý — kẹt xe, hàng rong ẩm thực, biểu diễn đường phố, xả hàng giờ chót — 
              đều được cập nhật tức thì dưới dạng "Biến động thời gian thực".
            </p>
            <div className="space-y-3">
              {[
                'Phòng chat phân mảnh theo vị trí địa lý',
                'Theo dõi sự kiện ngẫu nhiên toàn thành phố',
                'Biến động nảy số trực thời trên bản đồ',
                'Đưa ra quyết định tham gia ngay lập tức',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <span className="text-orange-600 text-xs">✓</span>
                  </div>
                  <span className="text-stone-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`group relative bg-white rounded-3xl p-7 border ${feature.border} hover:shadow-xl transition-all duration-500 hover:-translate-y-1`}
            >
              <div className={`w-12 h-12 rounded-2xl ${feature.bg} flex items-center justify-center mb-5`}>
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>
              <h4 className="text-lg font-bold text-stone-900 mb-1">{feature.title}</h4>
              <p className={`text-xs font-medium ${feature.subtitleColor} mb-3`}>{feature.subtitle}</p>
              <p className="text-sm text-stone-500 leading-relaxed">{feature.description}</p>
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
