import { BookOpen, Target, Users, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="profil" className="py-16 md:py-24 bg-pesantren-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 font-medium rounded-full text-sm mb-4">
            Profil Pesantren
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4">
            Mengenal Al-Anwar Lebih Dekat
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Memahami visi, misi, dan sejarah perjalanan Pondok Pesantren Al-Anwar dalam mencetak generasi Qur'ani.
          </p>
        </div>

        {/* Visi & Misi - 2 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Visi Card */}
          <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <Target className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold">Visi Kami</h3>
            </div>
            <p className="text-lg leading-relaxed text-white/95">
              "Menjadi lembaga pendidikan Islam terdepan yang menghasilkan generasi hafizh Qur'an,
              berakhlak karimah, berwawasan global, dan mampu bersaing di era modern tanpa kehilangan
              identitas keislaman."
            </p>
          </div>

          {/* Misi Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                <BookOpen className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-900">Misi Kami</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Menyelenggarakan pendidikan Tahfidz Al-Qur'an dengan metode yang efektif dan menyenangkan",
                'Mengintegrasikan kurikulum pesantren salafiyah dengan kurikulum nasional berkualitas',
                'Membentuk karakter santri yang berakhlak mulia dan mandiri',
                'Mengembangkan potensi santri melalui berbagai kegiatan ekstrakurikuler',
                'Menyiapkan santri untuk melanjutkan ke perguruan tinggi terbaik dalam dan luar negeri'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-emerald-900 text-sm font-bold">{index + 1}</span>
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sejarah Singkat - Alternating Layout */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-emerald-900 mb-4">
              Sejarah Singkat
            </h3>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>

          {/* Timeline Item 1 - Image Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=800&h=450&fit=crop"
                  alt="Pendirian Pesantren"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-emerald-900 font-bold text-center text-sm">
                  1985<br />Didirikan
                </span>
              </div>
            </div>
            <div className="lg:pl-8">
              <h4 className="text-xl font-bold text-emerald-900 mb-4">Tahun Berdiri</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pondok Pesantren Al-Anwar didirikan pada tahun 1985 oleh KH. Abdullah Anwar,
                seorang ulama kharismatik yang memiliki visi besar untuk menciptakan lembaga
                pendidikan yang memadukan keilmuan agama Islam dengan pengetahuan umum.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Bermula dari sebuah musholla kecil dengan 15 santri, kini Al-Anwar telah
                berkembang menjadi salah satu pesantren terkemuka di Jawa Barat dengan lebih
                dari 2000 santri.
              </p>
            </div>
          </div>

          {/* Timeline Item 2 - Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
            <div className="lg:order-2 relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=450&fit=crop"
                  alt="Pengembangan Fasilitas"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-emerald-700 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-center text-sm">
                  2005<br />Ekspansi
                </span>
              </div>
            </div>
            <div className="lg:order-1 lg:pr-8">
              <h4 className="text-xl font-bold text-emerald-900 mb-4">Era Pengembangan</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pada tahun 2005, pesantren mengalami perluasan besar-besaran dengan pembangunan
                gedung tahfidz baru, laboratorium komputer, dan asrama modern. Kurikulum formal
                SMP dan SMA juga mulai diterapkan.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Periode ini menandai transformasi Al-Anwar menjadi pesantren modern yang tetap
                mempertahankan nilai-nilai tradisional pesantren salaf.
              </p>
            </div>
          </div>

          {/* Timeline Item 3 - Image Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1577896334614-5d29108b08dc?w=800&h=450&fit=crop"
                  alt="Prestasi Santri"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-700 rounded-full flex items-center justify-center shadow-lg">
                <Award className="w-8 h-8 text-amber-400" />
              </div>
            </div>
            <div className="lg:pl-8">
              <h4 className="text-xl font-bold text-emerald-900 mb-4">Prestasi & Pengakuan</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kini, Al-Anwar telah melahirkan ribuan alumni yang tersebar di berbagai
                perguruan tinggi ternama, baik di dalam maupun luar negeri. Banyak alumni
                yang menjadi hafizh Qur'an, ulama, profesional, dan pemimpin masyarakat.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Pesantren terus berkomitmen untuk meningkatkan kualitas pendidikan dan
                memperluas jangkauan dakwah melalui pendidikan yang berkualitas.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-emerald-700 to-emerald-900 rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '2000+', label: 'Santri Aktif', icon: Users },
              { number: '150+', label: 'Pengajar & Ustadz', icon: Users },
              { number: '38+', label: 'Tahun Pengabdian', icon: Award },
              { number: '5000+', label: 'Alumni', icon: BookOpen },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-amber-400" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
