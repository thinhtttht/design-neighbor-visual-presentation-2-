import { Heart, Shield, Leaf, Building2, Moon, DollarSign } from 'lucide-react';

const economicImpacts = [
  {
    icon: Moon,
    title: 'Kinh tế Đêm & Siêu cục bộ',
    description: 'Kích thích hành vi tiêu dùng tự phát — thúc đẩy giới trẻ bước ra đường, chi tiêu cho quán ăn hẻm, cafe, dịch vụ vận chuyển. Giữ dòng tiền lưu thông trong nền kinh tế nội đô.',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
    borderColor: 'from-orange-400 to-orange-600',
    badgeBg: 'bg-orange-50',
    badgeBorder: 'border-orange-100',
    badgeText: 'text-orange-700',
    badgeSubtext: 'text-orange-500',
    stat: 'Tăng doanh thu',
    statValue: 'Khối kinh doanh cá thể',
  },
  {
    icon: DollarSign,
    title: 'Giải cứu Công suất Dư thừa',
    description: 'Giúp doanh nghiệp dịch vụ giải bài toán "giờ chết" bằng sự kiện hút khách tức thì. Cắt giảm chi phí trung gian và marketing đắt đỏ cho nền tảng quảng cáo nước ngoài.',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-700',
    borderColor: 'from-amber-500 to-amber-700',
    badgeBg: 'bg-amber-50',
    badgeBorder: 'border-amber-100',
    badgeText: 'text-amber-800',
    badgeSubtext: 'text-amber-600',
    stat: 'Cắt giảm',
    statValue: 'Chi phí marketing',
  },
];

const socialImpacts = [
  {
    icon: Shield,
    title: 'An toàn Đô thị & Giảm nghẽn Giao thông',
    description: 'Cập nhật sự việc ngẫu nhiên (kẹt xe, sự cố đường) toàn thành phố giúp người dân chủ động điều chỉnh lộ trình — hệ thống tự điều phối giảm tải giao thông.',
    iconBg: 'bg-stone-100',
    iconColor: 'text-stone-600',
    stat: 'Self-organizing',
    statValue: 'System',
    statColor: 'text-stone-600',
    statSubColor: 'text-stone-400',
  },
  {
    icon: Heart,
    title: 'Giải cứu Sức khỏe Tinh thần',
    description: 'Kéo giảm trầm cảm, lo âu, cô đơn kỹ thuật số bằng cách chuyển hóa kết nối ảo thành hoạt động vật lý lành mạnh: thể thao, học tập, tình nguyện xóm phố.',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-500',
    stat: 'Social CSR',
    statValue: 'Thế hệ trẻ',
    statColor: 'text-rose-600',
    statSubColor: 'text-rose-400',
  },
  {
    icon: Leaf,
    title: 'Phát triển Bền vững',
    description: 'Kiến tạo cộng đồng cư dân nhỏ tự quản, gắn kết tình nghĩa xóm giềng đô thị qua công nghệ số — xây dựng thành phố thông minh nhưng giàu tính nhân văn.',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    stat: 'Smart City',
    statValue: 'Nhân văn',
    statColor: 'text-orange-600',
    statSubColor: 'text-orange-400',
  },
  {
    icon: Building2,
    title: 'Kinh tế Sự kiện Bản địa',
    description: 'Tạo hệ sinh thái kinh tế xoay quanh các sự kiện tự phát, giúp các hộ kinh doanh nhỏ tiếp cận khách hàng trực tiếp mà không cần trung gian.',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-700',
    stat: 'Direct',
    statValue: 'Economy',
    statColor: 'text-amber-700',
    statSubColor: 'text-amber-500',
  },
];

export default function ImpactSection() {
  return (
    <section id="impact" className="relative py-24 lg:py-32 bg-gradient-to-b from-white via-orange-50/10 to-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-100 text-rose-700 text-sm font-medium">
            <Heart className="w-4 h-4" />
            Hiệu quả & Tác động
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 font-[Space_Grotesk]">
            Tác động
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-700"> Kinh tế & Xã hội</span>
          </h2>
        </div>

        {/* Economic Impact */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-stone-900 mb-8 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">💰</span>
            Hiệu quả Kinh tế Vĩ mô
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {economicImpacts.map((impact) => (
              <div key={impact.title} className="group relative bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${impact.borderColor}`} />
                <div className="p-8 pl-10">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-2xl ${impact.iconBg} flex items-center justify-center shrink-0`}>
                      <impact.icon className={`w-7 h-7 ${impact.iconColor}`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-stone-900 mb-2">{impact.title}</h4>
                      <p className="text-sm text-stone-500 leading-relaxed mb-4">{impact.description}</p>
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${impact.badgeBg} border ${impact.badgeBorder}`}>
                        <span className={`text-xs font-bold ${impact.badgeText}`}>{impact.stat}</span>
                        <span className={`text-xs ${impact.badgeSubtext}`}>{impact.statValue}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Impact */}
        <div>
          <h3 className="text-2xl font-bold text-stone-900 mb-8 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center">🌱</span>
            Tác động Xã hội & Phát triển Bền vững
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {socialImpacts.map((impact) => (
              <div key={impact.title} className="group bg-white rounded-3xl p-7 border border-stone-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-2xl ${impact.iconBg} flex items-center justify-center mb-5`}>
                  <impact.icon className={`w-6 h-6 ${impact.iconColor}`} />
                </div>
                <h4 className="text-lg font-bold text-stone-900 mb-2">{impact.title}</h4>
                <p className="text-sm text-stone-500 leading-relaxed mb-4">{impact.description}</p>
                <div className="flex items-center gap-2 text-xs font-bold">
                  <span className={impact.statColor}>{impact.stat}</span>
                  <span className="text-stone-300">—</span>
                  <span className={impact.statSubColor}>{impact.statValue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Photo */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <img
            src="https://images.pexels.com/photos/5212653/pexels-photo-5212653.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=700"
            alt="Students collaborating"
            className="w-full h-64 object-cover rounded-3xl shadow-lg"
          />
          <img
            src="https://images.pexels.com/photos/7972949/pexels-photo-7972949.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=700"
            alt="Group study outdoors"
            className="w-full h-64 object-cover rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
