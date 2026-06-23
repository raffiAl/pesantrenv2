import { Quote } from 'lucide-react';

const SambutanPimpinan = () => {
  return (
    <section id="profil" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1596913705738-3d7f06a5c5b3?w=600&h=700&fit=crop"
                alt="KH. Abdullah Anwar - Pimpinan Pesantren"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-pesantren-gold/20 rounded-2xl -z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pesantren-green/10 rounded-full -z-0"></div>
            
            {/* Experience Badge */}
            <div className="absolute bottom-8 left-0 bg-white p-4 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-pesantren-green rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">25+</span>
                </div>
                <div>
                  <p className="font-bold text-gray-800">Tahun Mengabdi</p>
                  <p className="text-sm text-gray-600">Dalam Pendidikan Islam</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <span className="inline-block px-4 py-2 bg-pesantren-green/10 text-pesantren-green font-medium rounded-full text-sm mb-4">
              Sambutan Pimpinan
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-pesantren-green mb-6">
              Assalamu'alaikum Warahmatullahi Wabarakatuh
            </h2>

            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-8 h-8 text-pesantren-gold/30" />
              
              <p className="text-gray-700 leading-relaxed mb-6 text-lg italic">
                "Pondok Pesantren Al-Anwar hadir sebagai jawaban atas kebutuhan umat akan 
                pendidikan Islam yang autentik namun tetap relevan dengan perkembangan zaman. 
                Kami berkomitmen untuk mencetak generasi yang tidak hanya hafal Al-Qur'an, 
                tetapi juga memiliki akhlak mulia dan wawasan global."
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              Dengan memadukan kurikulum salafiyah (kitab kuning) dan kurikulum modern, 
              kami berusaha membentuk santri yang balance antara ilmu agama dan ilmu umum, 
              antara tradisi dan kemajuan teknologi.
            </p>

            {/* Signature Area */}
            <div className="border-l-4 border-pesantren-gold pl-6 py-4">
              <p className="font-bold text-pesantren-green text-xl">
                KH. Abdullah Anwar, Lc., M.A.
              </p>
              <p className="text-gray-600">
                Pimpinan Pondok Pesantren Al-Anwar
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="#pendaftaran"
              className="inline-flex items-center mt-8 px-6 py-3 bg-pesantren-green text-white font-semibold rounded-lg hover:bg-pesantren-emerald transition-colors duration-300 shadow-lg"
            >
              Bergabung Bersama Kami
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SambutanPimpinan;
