import { FileText, Users, Calendar, MapPin } from 'lucide-react';

export default function ProjectInfoSection() {
  return (
    <section className="relative py-16 bg-white border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Competition Info Banner */}
        <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-yellow-50 rounded-3xl p-8 lg:p-10 border border-orange-200 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">🏆</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-200 text-orange-900">INNOSTAR 2026</span>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2 font-[Space_Grotesk]">
                Cuộc thi Ý tưởng Khởi nghiệp Sinh viên
              </h3>
              <p className="text-stone-600 text-sm mb-4">
                Bản mô tả Ý tưởng/Dự án chính thức
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-stone-500">
                  <Calendar className="w-4 h-4 text-orange-500" />
                  <span>22/05/2026</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-500">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <span>TP. Hồ Chí Minh</span>
                </div>
              </div>
            </div>
            <div className="lg:text-right">
              <p className="text-sm text-stone-500 mb-2">Dự án</p>
              <p className="text-4xl font-bold text-gradient font-[Space_Grotesk]">NEIGHBOR</p>
              <p className="text-sm text-stone-500 mt-2 italic">
                "Mở bản đồ xanh, lập kèo nhanh, kết bạn lành"
              </p>
            </div>
          </div>
        </div>

        {/* Team Info Table */}
        <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden">
          <div className="px-8 py-6 bg-stone-50 border-b border-stone-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
              <Users className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-stone-900">Thông tin Nhóm Ý tưởng/Dự án</h3>
              <p className="text-xs text-stone-400">Thành viên chính thức tham gia</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-stone-50/50">
                  <th className="text-left px-6 py-4 font-semibold text-stone-500 text-xs uppercase tracking-wider">Họ và Tên</th>
                  <th className="text-left px-6 py-4 font-semibold text-stone-500 text-xs uppercase tracking-wider">Chức danh</th>
                  <th className="text-left px-6 py-4 font-semibold text-stone-500 text-xs uppercase tracking-wider">Trường/Đại học</th>
                  <th className="text-left px-6 py-4 font-semibold text-stone-500 text-xs uppercase tracking-wider">Chuyên ngành</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr className="bg-orange-50/50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">NT</div>
                      <span className="font-semibold text-stone-900">Nguyễn Văn Thịnh</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700">Nhóm trưởng</span>
                  </td>
                  <td className="px-6 py-4 text-stone-600">ĐH FPT HCM</td>
                  <td className="px-6 py-4 text-stone-600">Trí tuệ Nhân tạo</td>
                </tr>
                {[1, 2, 3, 4].map((i) => (
                  <tr key={i} className="hover:bg-stone-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-400 text-xs font-bold">TV</div>
                        <span className="text-stone-400 italic">Thành viên {i}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-500">Thành viên</span>
                    </td>
                    <td className="px-6 py-4 text-stone-400">—</td>
                    <td className="px-6 py-4 text-stone-400">—</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Project Summary */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <div className="flex items-start gap-4 p-6 bg-orange-50/60 rounded-2xl border border-orange-100">
            <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-stone-900 mb-1">Tên dự án</p>
              <p className="text-sm text-stone-500">NEIGHBOR — Nền tảng Mạng xã hội Không gian & Thời gian thực</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-amber-50/60 rounded-2xl border border-amber-100">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <p className="text-sm font-bold text-stone-900 mb-1">Sản phẩm</p>
              <p className="text-sm text-stone-500">Web App quản lý & điều phối cuộc hẹn tự phát dựa trên vị trí</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-stone-50 rounded-2xl border border-stone-200">
            <div className="w-10 h-10 rounded-xl bg-stone-200 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-stone-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-stone-900 mb-1">Đối tượng</p>
              <p className="text-sm text-stone-500">Giới trẻ đô thị 15-30 tuổi tại TP.HCM (2.5M+ người)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
