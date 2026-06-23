import { Printer, X } from 'lucide-react';

const PrintableBrosur = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-slate-900/80 backdrop-blur-sm">
      <div className="min-h-screen py-8 px-4">
        {/* Brosur Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl print:shadow-none print:max-w-none">
          {/* Header - Hide Print Button When Printing */}
          <div className="flex justify-between items-center p-6 border-b border-slate-200 print:hidden">
            <h2 className="text-xl font-bold text-emerald-900">Preview Brosur Digital</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Tutup"
            >
              <X className="w-6 h-6 text-slate-600" />
            </button>
          </div>

          {/* Print Button - Hide When Printing */}
          <div className="p-6 bg-slate-50 border-b border-slate-200 print:hidden">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center px-6 py-3 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors shadow-lg"
            >
              <Printer className="w-5 h-5 mr-2" />
              Cetak / Simpan PDF
            </button>
          </div>

          {/* Brosur Content */}
          <div className="p-8 md:p-12">
            {/* Header Section */}
            <div className="text-center mb-8 pb-8 border-b-4 border-emerald-700">
              <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-900 font-bold text-4xl">A</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-2">
                Pondok Pesantren Al-Anwar
              </h1>
              <p className="text-xl text-emerald-700 font-medium">
                Mencetak Generasi Qur'ani, Berakhlak Mulia, dan Berwawasan Global
              </p>
              <p className="text-slate-600 mt-2">
                📍 Jl. Pesantren No. 99, Desa Barokah, Kabupaten Berkah 12345
              </p>
            </div>

            {/* Academic Programs */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">1</span>
                Program Pendidikan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Tahfidz Al-Qur'an", desc: "Program hafalan 30 juz dengan metode mutqin" },
                  { title: "Madrasah Diniyah", desc: "Pendidikan agama dengan kitab kuning" },
                  { title: "SMP Islam Terpadu", desc: "Pendidikan formal berbasis Islam" },
                  { title: "SMA Islam Terpadu", desc: "Pendidikan menengah dengan keunggulan sains" },
                  { title: "Ma'had Aly", desc: "Pendidikan tinggi ilmu-ilmu keislaman" },
                  { title: "Takhasus Tahfidz", desc: "Program intensif hafalan Al-Qur'an" }
                ].map((program, idx) => (
                  <div key={idx} className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                    <h3 className="font-bold text-emerald-900">{program.title}</h3>
                    <p className="text-slate-600 text-sm mt-1">{program.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">2</span>
                Fasilitas Lengkap
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "Masjid Jami'",
                  "Asrama Nyaman",
                  "Lab Komputer",
                  "Perpustakaan Digital",
                  "Gedung Tahfidz",
                  "Lapangan Olahraga",
                  "Kantin Higienis",
                  "Klinik Kesehatan"
                ].map((facility, idx) => (
                  <div key={idx} className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-center">
                    <p className="text-sm font-medium text-slate-700">{facility}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">3</span>
                Syarat Pendaftaran
              </h2>
              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                <ol className="space-y-2">
                  {[
                    "Mengisi formulir pendaftaran (online/offline)",
                    "Fotokopi Akta Kelahiran (2 lembar)",
                    "Fotokopi Kartu Keluarga (2 lembar)",
                    "Fotokopi Ijazah/SKL terakhir (2 lembar)",
                    "Pas foto 3x4 (4 lembar) & 4x6 (4 lembar)",
                    "Surat keterangan sehat dari dokter",
                    "Surat rekomendasi dari pesantren sebelumnya (jika ada)"
                  ].map((req, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center mr-3 text-white text-xs font-bold flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-slate-700">{req}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-emerald-900 text-white p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-center">Hubungi Kami</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-amber-400 mb-2">📞 Telepon</p>
                  <p className="text-lg">(021) 1234-5678</p>
                  <p className="text-lg">0812-3456-7890 (WhatsApp)</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-400 mb-2">📧 Email & Web</p>
                  <p className="text-lg">info@al-anwar.sch.id</p>
                  <p className="text-lg">www.al-anwar.sch.id</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20 text-center">
                <p className="text-amber-400 font-medium">
                  🕐 Jadwal Pelayanan: Senin - Sabtu, 08.00 - 16.00 WIB
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center text-slate-500 text-sm">
              <p>Pondok Pesantren Al-Anwar © {new Date().getFullYear()}</p>
              <p className="mt-1">Mencetak generasi unggul dunia akhirat</p>
            </div>
          </div>
        </div>
      </div>

      {/* Print-specific styles */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .fixed.inset-0.z-50,
          .fixed.inset-0.z-50 * {
            visibility: visible;
          }
          .fixed.inset-0.z-50 {
            position: absolute;
            left: 0;
            top: 0;
            background: white !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:max-w-none {
            max-width: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PrintableBrosur;
