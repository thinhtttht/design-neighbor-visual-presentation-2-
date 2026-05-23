import { Code2, Brain, GitBranch, Cpu, GraduationCap, Award } from 'lucide-react';

const capabilities = [
  {
    icon: Code2,
    title: 'Full-stack Development',
    description: 'Tự thân hiện thực hóa 100% yêu cầu kỹ thuật: từ API backend, database đến frontend algorithms.',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Chuyên ngành Trí tuệ Nhân tạo tại ĐH FPT HCM — kinh nghiệm tích hợp mô hình ngôn ngữ lớn (LLM).',
  },
  {
    icon: GitBranch,
    title: 'Git-Branching Workflow',
    description: 'Quy trình kiểm soát phiên bản chuyên nghiệp, phát triển trên môi trường AI thông minh Cursor.',
  },
  {
    icon: Cpu,
    title: 'Spatial Algorithms',
    description: 'Xử lý thuật toán hình học phức tạp: Circular Dispersion Math, geo-fencing, spatial indexing.',
  },
];

const experiences = [
  {
    icon: Award,
    title: 'Sáng tạo Khoa học Kỹ thuật',
    description: 'Tham gia cuộc thi KHKT dành cho học sinh/sinh viên. Định hình tư duy nghiên cứu hệ thống, phương pháp giải quyết vấn đề bằng công nghệ.',
  },
  {
    icon: GraduationCap,
    title: 'Ứng dụng AI vào Thực tế',
    description: 'Phát triển Web App học tập tích hợp AI. Làm chủ quy trình xử lý dữ liệu thông minh, cá nhân hóa trải nghiệm người dùng.',
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="relative py-24 lg:py-32 bg-gradient-to-b from-stone-50 to-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] bg-orange-50 rounded-full blur-3xl opacity-40 -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-sm font-medium">
            <GraduationCap className="w-4 h-4" />
            Đội ngũ Sáng lập
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 font-[Space_Grotesk]">
            Năng lực
            <span className="text-gradient"> Tổ chức Thực hiện</span>
          </h2>
        </div>

        {/* Leader Profile */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden mb-16">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Image side */}
            <div className="lg:col-span-2 relative">
              <img
                src="https://images.pexels.com/photos/7413916/pexels-photo-7413916.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500"
                alt="Team Leader"
                className="w-full h-full min-h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-transparent" />
              <div className="absolute bottom-6 left-6 lg:hidden">
                <h3 className="text-2xl font-bold text-white">Nguyễn Văn Thịnh</h3>
                <p className="text-orange-300">Trưởng nhóm & Sáng lập</p>
              </div>
            </div>

            {/* Info side */}
            <div className="lg:col-span-3 p-8 lg:p-10">
              <div className="hidden lg:block mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-3xl font-bold text-stone-900 font-[Space_Grotesk]">Nguyễn Văn Thịnh</h3>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700">Trưởng nhóm</span>
                </div>
                <p className="text-orange-600 font-medium">Sáng lập Dự án NEIGHBOR</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-stone-800">Đại học FPT Thành phố Hồ Chí Minh</p>
                    <p className="text-xs text-stone-400">Chuyên ngành Trí tuệ Nhân tạo (AI)</p>
                  </div>
                </div>
              </div>

              {/* Experience Cards */}
              <h4 className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-4">Kinh nghiệm Đổi mới Sáng tạo</h4>
              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div key={exp.title} className="flex items-start gap-3 p-4 bg-orange-50/50 rounded-2xl border border-orange-100">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                      <exp.icon className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-stone-800 mb-1">{exp.title}</p>
                      <p className="text-xs text-stone-500 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technical Capabilities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-stone-900 mb-8 text-center">Năng lực Công nghệ Cốt lõi</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="bg-white rounded-3xl p-6 border border-stone-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-700 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-orange-200">
                  <cap.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-base font-bold text-stone-900 mb-2">{cap.title}</h4>
                <p className="text-sm text-stone-500 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-3xl p-8 lg:p-12 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center font-[Space_Grotesk]">
            Công nghệ Ứng dụng
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { tech: 'React + TypeScript', use: 'Frontend Framework', icon: '⚛️' },
              { tech: 'SQLite + Spatial Index', use: 'Database & Geo-queries', icon: '🗄️' },
              { tech: 'Leaflet / Mapbox', use: 'Bản đồ Tương tác', icon: '🗺️' },
              { tech: 'WebSocket', use: 'Real-time Communication', icon: '🔌' },
              { tech: 'Edge Network (CDN)', use: 'Triển khai Global', icon: '🌐' },
              { tech: 'AI / LLM Integration', use: 'Cá nhân hóa & Gợi ý', icon: '🤖' },
            ].map((item) => (
              <div key={item.tech} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-bold text-white text-sm">{item.tech}</p>
                  <p className="text-xs text-stone-400">{item.use}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
