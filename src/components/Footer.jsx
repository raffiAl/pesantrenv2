import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Profil', href: '#profil' },
    { name: 'Program', href: '#program' },
    { name: 'Fasilitas', href: '#fasilitas' },
    { name: 'Berita', href: '#berita' },
  ];

  const programs = [
    'Tahfidz Al-Qur\'an',
    'Madrasah Diniyah',
    'SMP Islam Terpadu',
    'SMA Islam Terpadu',
    'Ma\'had Aly',
  ];

  const socialLinks = [
  ];

  return (
    <footer className="bg-pesantren-green text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-pesantren-gold rounded-full flex items-center justify-center">
                <span className="text-pesantren-green font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Al-Anwar</h3>
                <p className="text-pesantren-gold text-sm">Pondok Pesantren</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Mencetak generasi Qur'ani yang berakhlak mulia dan berwawasan global 
              melalui pendidikan Islam berkualitas.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-pesantren-gold hover:text-pesantren-green transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pesantren-gold">Tautan Cepat</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-pesantren-gold transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pesantren-gold">Program Pendidikan</h4>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program}>
                  <a
                    href="#program"
                    className="text-gray-300 hover:text-pesantren-gold transition-colors duration-200"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pesantren-gold">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-pesantren-gold mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Jl. Pesantren No. 99, Desa Barokah, 
                  Kecamatan Santri, Kabupaten Berkah 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pesantren-gold flex-shrink-0" />
                <span className="text-gray-300">(021) 1234-5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pesantren-gold flex-shrink-0" />
                <span className="text-gray-300">info@al-anwar.sch.id</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Pondok Pesantren Al-Anwar. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-pesantren-gold transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-pesantren-gold transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
