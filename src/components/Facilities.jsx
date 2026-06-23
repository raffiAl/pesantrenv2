import { Building, BookOpen, Wifi, Utensils, Dumbbell, Church } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      image: 'https://images.unsplash.com/photo-1564121217839-e8f7f79dc2a0?w=600&h=400&fit=crop',
      badge: 'Ibadah',
      title: "Masjid Jami'",
      description: 'Masjid utama dengan kapasitas 1000+ jamaah, dilengkapi AC dan sistem sound modern untuk kegiatan ibadah sehari-hari.',
      icon: Church,
    },
    {
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=400&fit=crop',
      badge: 'Asrama',
      title: 'Asrama Santri Putra',
      description: 'Asrama nyaman dengan sistem kamar berisi 4-6 santri, dilengkapi lemari pribadi, kamar mandi dalam, dan ruang belajar.',
      icon: Building,
    },
    {
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
      badge: 'Akademik',
      title: 'Gedung Tahfidz',
      description: "Gedung khusus untuk program hafalan Al-Qur'an dengan ruang halaqah yang kondusif dan metode tahfidz terstruktur.",
      icon: BookOpen,
    },
    {
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop',
      badge: 'Akademik',
      title: 'Laboratorium Komputer',
      description: 'Lab komputer dengan 50+ unit PC terbaru, mendukung pembelajaran IT, programming, dan multimedia untuk santri.',
      icon: Wifi,
    },
    {
      image: 'https://images.unsplash.com/photo-1565514020125-0916963a0c65?w=600&h=400&fit=crop',
      badge: 'Fasilitas Umum',
      title: 'Kantin & Kafetaria',
      description: 'Kantin bersih dan higienis menyediakan makanan bergizi dengan harga terjangkau, memenuhi standar kesehatan pesantren.',
      icon: Utensils,
    },
    {
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
      badge: 'Olahraga',
      title: 'Lapangan Olahraga',
      description: 'Lapangan serbaguna untuk sepak bola, basket, voli, dan kegiatan olahraga lainnya untuk menjaga kesehatan santri.',
      icon: Dumbbell,
    },
    {
      image: 'https://images.unsplash.com/photo-1580582932707-52dc41437c9e?w=600&h=400&fit=crop',
      badge: 'Asrama',
      title: 'Asrama Santri Putri',
      description: 'Asrama khusus putri dengan pengawasan ketat, fasilitas lengkap, dan lingkungan yang nyaman untuk belajar.',
      icon: Building,
    },
    {
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop',
      badge: 'Akademik',
      title: 'Perpustakaan Digital',
      description: 'Perpustakaan modern dengan koleksi kitab kuning, buku umum, dan akses digital library untuk riset dan pembelajaran.',
      icon: BookOpen,
    },
  ];

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Ibadah':
        return 'bg-emerald-100 text-emerald-700';
      case 'Asrama':
        return 'bg-blue-100 text-blue-700';
      case 'Akademik':
        return 'bg-amber-100 text-amber-700';
      case 'Fasilitas Umum':
        return 'bg-purple-100 text-purple-700';
      case 'Olahraga':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="fasilitas" className="py-16 md:py-24 bg-pesantren-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 font-medium rounded-full text-sm mb-4">
            Fasilitas Pesantren
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4">
            Fasilitas Lengkap & Modern
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Kami menyediakan berbagai fasilitas untuk mendukung kenyamanan dan keberhasilan belajar santri.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge Overlay */}
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadgeColor(facility.badge)}`}>
                    {facility.badge}
                  </span>
                </div>
                {/* Icon Overlay */}
                <div className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <facility.icon className="w-5 h-5 text-emerald-700" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                  {facility.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA for Facility Tour */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Ingin melihat fasilitas kami secara langsung?
          </p>
          <a
            href="#pendaftaran"
            className="inline-flex items-center px-6 py-3 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors duration-300"
          >
            Jadwalkan Kunjungan
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
