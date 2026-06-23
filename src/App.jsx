import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SambutanPimpinan from './components/SambutanPimpinan';
import AboutSection from './components/AboutSection';
import Facilities from './components/Facilities';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SambutanPimpinan />
        <AboutSection />
        <Facilities />
        <NewsSection />
        
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
