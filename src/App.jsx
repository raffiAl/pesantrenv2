import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SambutanPimpinan from './components/SambutanPimpinan';
import AboutSection from './components/AboutSection';
import Facilities from './components/Facilities';
import NewsSection from './components/NewsSection';
import RegistrationForm from './components/RegistrationForm';
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
        <RegistrationForm />

        {/* CTA Section for Pendaftaran */}
        <section className="py-16 md:py-24 bg-emerald-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-emerald-800 to-emerald-900 rounded-3xl p-8 md:p-16 text-center shadow-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Siap Bergabung dengan Keluarga Besar Al-Anwar?
              </h2>
              <p className="text-xl text-emerald-100 mb-10 max-w-3xl mx-auto">
                Pendaftaran santri baru telah dibuka. Segera daftarkan putra-putri Anda
                untuk menjadi bagian dari generasi Qur'ani yang unggul.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#pendaftaran"
                  className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-emerald-900 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
                >
                  Daftar Online Sekarang
                </a>
                <a
                  href="#pendaftaran"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-900 transition-all duration-300 w-full sm:w-auto"
                >
                  Download Brosur
                </a>
              </div>
              <p className="mt-10 text-emerald-200 text-sm">
                📞 Informasi lebih lanjut: (021) 1234-5678 atau WhatsApp: 0812-3456-7890
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
