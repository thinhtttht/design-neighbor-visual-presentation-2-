import { useState, useEffect } from 'react';
import { MapPin, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Tổng quan', href: '#hero' },
  { label: 'Vấn đề', href: '#problem' },
  { label: 'Giải pháp', href: '#solution' },
  { label: 'Kinh doanh', href: '#business' },
  { label: 'Thị trường', href: '#market' },
  { label: 'Tác động', href: '#impact' },
  { label: 'Lộ trình', href: '#roadmap' },
  { label: 'Đội ngũ', href: '#team' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-orange-900/5 border-b border-orange-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
              scrolled 
                ? 'bg-gradient-to-br from-orange-500 to-amber-700 shadow-lg shadow-orange-200' 
                : 'bg-white/20 backdrop-blur-sm border border-white/30'
            }`}>
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className={`font-bold text-lg tracking-tight font-[Space_Grotesk] transition-colors duration-300 ${
              scrolled ? 'text-stone-900' : 'text-white'
            }`}>
              NEIGHBOR
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  scrolled 
                    ? 'text-stone-600 hover:text-orange-700 hover:bg-orange-50' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* InnoStar Badge */}
          <div className="hidden lg:flex items-center">
            <div className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${
              scrolled 
                ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-200' 
                : 'bg-white/15 text-white border border-white/30 backdrop-blur-sm'
            }`}>
              ⭐ INNOSTAR 2026
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-stone-700' : 'text-white'}`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-orange-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-stone-700 rounded-lg hover:bg-orange-50 hover:text-orange-700 transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
