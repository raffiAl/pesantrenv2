import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=1920&h=1080&fit=crop"
          alt="Pondok Pesantren Al-Anwar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pesantren-green/90 to-pesantren-emerald/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-pesantren-gold/20 border border-pesantren-gold/30 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-pesantren-gold text-sm font-medium">
              🌟 Pendidikan Islam Berkualitas Sejak 1995
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Mencetak Generasi{' '}
            <span className="text-pesantren-gold">Qur'ani</span>, Berakhlak Mulia, dan Berwawasan Global
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed">
            Pondok Pesantren Al-Anwar memadukan tradisi kitab kuning dengan keunggulan sains modern. 
            Kami berkomitmen membentuk santri yang tidak hanya hafal Al-Qur'an, tetapi juga menguasai ilmu pengetahuan dan teknologi.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#pendaftaran"
              className="inline-flex items-center justify-center px-8 py-4 bg-pesantren-gold text-pesantren-green font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Daftar Sekarang
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#profil"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-pesantren-green transition-all duration-300"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            <div className="text-center sm:text-left">
              <p className="text-3xl sm:text-4xl font-bold text-pesantren-gold">500+</p>
              <p className="text-gray-200 text-sm mt-1">Santri Aktif</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-3xl sm:text-4xl font-bold text-pesantren-gold">50+</p>
              <p className="text-gray-200 text-sm mt-1">Pengajar</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-3xl sm:text-4xl font-bold text-pesantren-gold">25+</p>
              <p className="text-gray-200 text-sm mt-1">Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
