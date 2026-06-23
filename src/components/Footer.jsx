import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import AdminDashboard from './AdminDashboard';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showAdmin, setShowAdmin] = useState(false);

  const quickLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Profil', href: '#profil' },
    { name: 'Program', href: '#program' },
    { name: 'Fasilitas', href: '#fasilitas' },
    { name: 'Berita', href: '#berita' },
  ];

  const programs = [
    "Tahfidz Al-Qur'an",
    'Madrasah Diniyah',
    'SMP Islam Terpadu',
    'SMA Islam Terpadu',
    "Ma'had Aly",
  ];

  if (showAdmin) {
    return <AdminDashboard />;
  }

  return (
    <footer className="bg-emerald-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-emerald-900 font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Al-Anwar</h3>
                <p className="text-amber-500 text-sm">Pondok Pesantren</p>
              </div>
            </div>
            <p className="text-emerald-100 leading-relaxed mb-6">
              Mencetak generasi Qur'ani yang berakhlak mulia dan berwawasan global
              melalui pendidikan Islam berkualitas.
            </p>

            {/* Social Links Placeholder */}
            <div className="flex space-x-3">
              <a href="#" aria-label="Social Media" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-amber-500 hover:text-emerald-900 transition-all duration-300">
                <span className="text-sm font-bold">FB</span>
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-amber-500 hover:text-emerald-900 transition-all duration-300">
                <span className="text-sm font-bold">IG</span>
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-amber-500 hover:text-emerald-900 transition-all duration-300">
                <span className="text-sm font-bold">TW</span>
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-amber-500 hover:text-emerald-900 transition-all duration-300">
                <span className="text-sm font-bold">YT</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Tautan Cepat</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-emerald-100 hover:text-amber-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Program Pendidikan</h4>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program}>
                  <a
                    href="#program"
                    className="text-emerald-100 hover:text-amber-500 transition-colors duration-200"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <span className="text-emerald-100">
                  Jl. Pesantren No. 99, Desa Barokah,
                  Kecamatan Santri, Kabupaten Berkah 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-emerald-100">(021) 1234-5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-emerald-100">info@al-anwar.sch.id</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-emerald-200 text-sm text-center md:text-left">
              &copy; {currentYear} Pondok Pesantren Al-Anwar. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-emerald-200 hover:text-amber-500 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-emerald-200 hover:text-amber-500 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
            {/* Hidden Admin Button for Development */}
            <button
              onClick={() => setShowAdmin(true)}
              className="text-emerald-300 hover:text-amber-500 text-xs underline opacity-50 hover:opacity-100 transition-opacity"
              title="Admin Dashboard"
            >
              Mode Admin
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
