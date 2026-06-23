import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SambutanPimpinan from './components/SambutanPimpinan';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SambutanPimpinan />
        
        {/* Placeholder Section for Fasilitas */}
        <section id="fasilitas" className="py-20 bg-pesantren-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-2 bg-pesantren-green/10 text-pesantren-green font-medium rounded-full text-sm mb-4">
              Fasilitas
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-pesantren-green mb-4">
              Fasilitas Lengkap & Modern
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
              Kami menyediakan berbagai fasilitas untuk mendukung kenyamanan dan keberhasilan belajar santri.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Masjid Jami\'', capacity: 'Daya tampung 1000+ jamaah' },
                { name: 'Asrama Santri', capacity: 'Akomodasi nyaman dan Islami' },
                { name: 'Laboratorium Komputer', capacity: 'Fasilitas IT modern' },
              ].map((facility, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="w-16 h-16 bg-pesantren-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏛️</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{facility.name}</h3>
                  <p className="text-gray-600">{facility.capacity}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Placeholder Section for Berita */}
        <section id="berita" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-2 bg-pesantren-green/10 text-pesantren-green font-medium rounded-full text-sm mb-4">
              Berita & Kegiatan
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-pesantren-green mb-4">
              Kabar Al-Anwar
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
              Update terbaru seputar kegiatan dan prestasi santri Pondok Pesantren Al-Anwar.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Wisuda Tahfidz Angkatan ke-15', date: '15 Maret 2024' },
                { title: 'Juara 1 Lomba Pidato Tingkat Provinsi', date: '10 Maret 2024' },
                { title: 'Kunjungan Studi Banding dari Pesantren Tetangga', date: '5 Maret 2024' },
              ].map((news, index) => (
                <article key={index} className="bg-pesantren-cream rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-pesantren-green/20 flex items-center justify-center">
                    <span className="text-4xl">📰</span>
                  </div>
                  <div className="p-6">
                    <p className="text-pesantren-emerald text-sm font-medium mb-2">{news.date}</p>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">{news.title}</h3>
                    <a href="#" className="text-pesantren-green font-medium hover:text-pesantren-emerald inline-flex items-center">
                      Baca Selengkapnya
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section for Pendaftaran */}
        <section id="pendaftaran" className="py-20 bg-gradient-to-r from-pesantren-green to-pesantren-emerald">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Siap Bergabung dengan Keluarga Besar Al-Anwar?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Pendaftaran santri baru telah dibuka. Segera daftarkan putra-putri Anda 
              untuk menjadi bagian dari generasi Qur'ani yang unggul.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 bg-pesantren-gold text-pesantren-green font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Daftar Online Sekarang
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-pesantren-green transition-all duration-300"
              >
                Download Brosur
              </a>
            </div>
            <p className="mt-8 text-white/80 text-sm">
              📞 Informasi lebih lanjut: (021) 1234-5678 atau WhatsApp: 0812-3456-7890
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
