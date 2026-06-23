import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Profil', href: '#profil' },
    { name: 'Program', href: '#program' },
    { name: 'Fasilitas', href: '#fasilitas' },
    { name: 'Berita', href: '#berita' },
    { name: 'Pendaftaran', href: '#pendaftaran' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-pesantren-green shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-pesantren-gold rounded-full flex items-center justify-center">
              <span className="text-pesantren-green font-bold text-lg">A</span>
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-white'
              }`}>
                Al-Anwar
              </h1>
              <p className={`text-xs transition-colors duration-300 ${
                isScrolled ? 'text-pesantren-gold' : 'text-pesantren-gold'
              }`}>
                Pondok Pesantren
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-white hover:text-pesantren-gold transition-colors duration-200 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#pendaftaran"
              className="ml-4 px-4 py-2 bg-pesantren-gold text-pesantren-green font-semibold rounded-md hover:bg-yellow-400 transition-colors duration-200"
            >
              Daftar Sekarang
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-pesantren-green shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-white hover:text-pesantren-gold hover:bg-pesantren-emerald rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#pendaftaran"
              className="block mt-4 px-4 py-3 bg-pesantren-gold text-pesantren-green font-semibold text-center rounded-md hover:bg-yellow-400 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
