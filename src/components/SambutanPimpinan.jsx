import { Quote } from 'lucide-react';

const SambutanPimpinan = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 font-medium rounded-full text-sm mb-4">
            Sambutan Pimpinan
          </span>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1596913705738-3d7f06a5c5b3?w=600&h=700&fit=crop"
                alt="KH. Abdullah Anwar - Pimpinan Pesantren"
                className="rounded-2xl shadow-md bg-slate-100 aspect-[3/4] object-cover w-full max-w-md mx-auto"
              />
            </div>
            
            {/* Floating Experience Badge */}
            <div className="absolute bottom-8 left-4 lg:left-8 bg-white p-4 rounded-xl shadow-lg max-w-xs z-20">
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 bg-emerald-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">25+</span>
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">Tahun Mengabdi</p>
                  <p className="text-xs text-gray-600">Dalam Pendidikan Islam</p>
                </div>
              </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-400/20 rounded-2xl -z-0 hidden lg:block"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-emerald-700/10 rounded-full -z-0 hidden lg:block"></div>
          </div>

          {/* Right Column - Text Content */}
          <div className="lg:pl-8">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6 leading-tight">
              Assalamu'alaikum Warahmatullahi Wabarakatuh
            </h2>

            {/* Blockquote with elegant border */}
            <div className="relative mb-8">
              <Quote className="absolute -top-2 -left-4 w-8 h-8 text-amber-500/30" />
              <blockquote className="border-l-4 border-amber-500 pl-6 py-2">
                <p className="text-gray-700 leading-relaxed text-lg italic mb-4">
                  "Pondok Pesantren Al-Anwar hadir sebagai jawaban atas kebutuhan umat akan
                  pendidikan Islam yang autentik namun tetap relevan dengan perkembangan zaman.
                  Kami berkomitmen untuk mencetak generasi yang tidak hanya hafal Al-Qur'an,
                  tetapi juga memiliki akhlak mulia dan wawasan global."
                </p>
              </blockquote>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              Dengan memadukan kurikulum salafiyah (kitab kuning) dan kurikulum modern,
              kami berusaha membentuk santri yang balance antara ilmu agama dan ilmu umum,
              antara tradisi dan kemajuan teknologi.
            </p>

            {/* Signature Area */}
            <div className="border-l-4 border-amber-500 pl-6 py-4 mb-8">
              <p className="font-bold text-emerald-900 text-xl">
                KH. Abdullah Anwar, Lc., M.A.
              </p>
              <p className="text-gray-600 text-sm">
                Pimpinan Pondok Pesantren Al-Anwar
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="#pendaftaran"
              className="inline-flex items-center px-6 py-3 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors duration-300 shadow-md"
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
