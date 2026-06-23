import { Calendar, ArrowRight, BookOpen, Trophy, Users } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
      date: '15 Maret 2024',
      category: 'Prestasi',
      title: "Wisuda Tahfidz Angkatan ke-15 Lulus dengan Nilai Memuaskan",
      excerpt: "Sebanyak 120 santri wisudawan tahfidz berhasil menyelesaikan hafalan 30 juz Al-Qur'an dengan rata-rata nilai mumtaz.",
      icon: BookOpen,
    },
    {
      image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=600&h=400&fit=crop',
      date: '10 Maret 2024',
      category: 'Kompetisi',
      title: 'Juara 1 Lomba Pidato Bahasa Arab Tingkat Provinsi Jawa Barat',
      excerpt: 'Santri Al-Anwar kembali menorehkan prestasi gemilang dengan meraih juara pertama dalam lomba pidato bahasa arab se-Jawa Barat.',
      icon: Trophy,
    },
    {
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
      date: '5 Maret 2024',
      category: 'Kegiatan',
      title: 'Kunjungan Studi Banding dari Pesantren Al-Hikmah Bandung',
      excerpt: 'Rombongan pesantren Al-Hikmah melakukan kunjungan untuk belajar tentang sistem manajemen dan kurikulum tahfidz di Al-Anwar.',
      icon: Users,
    },
    {
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',
      date: '28 Februari 2024',
      category: 'Akademik',
      title: 'Pelatihan Guru: Implementasi Kurikulum Merdeka di Pesantren',
      excerpt: 'Para pengajar mengikuti workshop intensif tentang penerapan kurikulum merdeka yang terintegrasi dengan nilai-nilai pesantren.',
      icon: BookOpen,
    },
    {
      image: 'https://images.unsplash.com/photo-1576267423048-15c0040fec78?w=600&h=400&fit=crop',
      date: '20 Februari 2024',
      category: 'Olahraga',
      title: 'Al-Anwar Cup 2024: Turnamen Olahraga Antar Santri Dimulai',
      excerpt: 'Turnamen olahraga tahunan featuring sepak bola, basket, voli, dan futsal diikuti oleh lebih dari 500 santri dari berbagai kelas.',
      icon: Trophy,
    },
    {
      image: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=600&h=400&fit=crop',
      date: '15 Februari 2024',
      category: 'Sosial',
      title: 'Bakti Sosial: Santri Al-Anwar Berbagi dengan Yatim Piatu',
      excerpt: 'Kegiatan bakti sosial rutin bulanan dimana santri berbagi sembako dan mengadakan acara hiburan bersama anak yatim piatu sekitar pesantren.',
      icon: Users,
    },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Prestasi':
        return 'bg-amber-500 text-emerald-900';
      case 'Kompetisi':
        return 'bg-emerald-700 text-white';
      case 'Kegiatan':
        return 'bg-blue-500 text-white';
      case 'Akademik':
        return 'bg-purple-500 text-white';
      case 'Olahraga':
        return 'bg-red-500 text-white';
      case 'Sosial':
        return 'bg-orange-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <section id="berita" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 font-medium rounded-full text-sm mb-4">
            Berita & Kegiatan
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4">
            Kabar Al-Anwar
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Update terbaru seputar kegiatan, prestasi, dan informasi penting dari Pondok Pesantren Al-Anwar.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={index}
              className="group bg-pesantren-cream rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              {/* Thumbnail Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date with Icon */}
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2 text-emerald-700" />
                  <span>{item.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-emerald-700 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.excerpt}
                </p>

                {/* Read More Link */}
                <a
                  href="#"
                  className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-900 transition-colors duration-300 group/link"
                >
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Lihat Semua Berita
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
