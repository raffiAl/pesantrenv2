import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    student_name: '',
    parent_name: '',
    whatsapp: '',
    education_level: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('registrations')
        .insert([
          {
            student_name: formData.student_name.trim(),
            parent_name: formData.parent_name.trim(),
            whatsapp: formData.whatsapp.trim(),
            education_level: formData.education_level,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        student_name: '',
        parent_name: '',
        whatsapp: '',
        education_level: ''
      });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage(err.message || 'Terjadi kesalahan saat mengirim pendaftaran.');
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="pendaftaran" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
            Pendaftaran Santri Baru
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Isi formulir di bawah ini untuk mendaftarkan putra-putri Anda menjadi bagian dari keluarga besar Pondok Pesantren Al-Anwar.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-slate-100">
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3 animate-pulse">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-emerald-800">Pendaftaran Berhasil!</h3>
                  <p className="text-emerald-700 text-sm mt-1">
                    Terima kasih telah mendaftar. Admin kami akan menghubungi Anda via WhatsApp dalam waktu 1x24 jam untuk proses selanjutnya.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-red-800">Pendaftaran Gagal</h3>
                  <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Student Name */}
              <div>
                <label htmlFor="student_name" className="block text-sm font-medium text-slate-700 mb-2">
                  Nama Lengkap Santri <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="student_name"
                  name="student_name"
                  value={formData.student_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 outline-none"
                  placeholder="Masukkan nama lengkap putra/putri Anda"
                />
              </div>

              {/* Parent Name */}
              <div>
                <label htmlFor="parent_name" className="block text-sm font-medium text-slate-700 mb-2">
                  Nama Orang Tua/Wali <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="parent_name"
                  name="parent_name"
                  value={formData.parent_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 outline-none"
                  placeholder="Masukkan nama orang tua/wali"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-700 mb-2">
                  Nomor WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 outline-none"
                  placeholder="Contoh: 0812-3456-7890"
                />
              </div>

              {/* Education Level */}
              <div>
                <label htmlFor="education_level" className="block text-sm font-medium text-slate-700 mb-2">
                  Tingkat Pendidikan <span className="text-red-500">*</span>
                </label>
                <select
                  id="education_level"
                  name="education_level"
                  value={formData.education_level}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 outline-none bg-white"
                >
                  <option value="">Pilih tingkat pendidikan</option>
                  <option value="SD/MI">SD/MI (Persiapan SMP)</option>
                  <option value="SMP/MTs">SMP/MTs (Persiapan SMA)</option>
                  <option value="SMA/MA">SMA/MA</option>
                  <option value="Takhasus">Takhasus (Tahfidz Intensif)</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 transform ${
                  isSubmitting
                    ? 'bg-slate-400 cursor-not-allowed'
                    : 'bg-emerald-700 hover:bg-emerald-800 hover:scale-[1.02] shadow-lg hover:shadow-xl'
                } text-white`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Mengirim Pendaftaran...
                  </span>
                ) : (
                  'Kirim Pendaftaran'
                )}
              </button>

              {/* Info Text */}
              <p className="text-xs text-slate-500 text-center mt-4">
                Dengan mengirimkan formulir ini, Anda menyetujui bahwa data akan digunakan untuk proses pendaftaran dan akan dihubungi oleh admin kami.
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-center">
            <p className="text-slate-600 mb-2">Butuh bantuan atau informasi lebih lanjut?</p>
            <p className="text-emerald-700 font-semibold">
              📞 (021) 1234-5678 | WhatsApp: 0812-3456-7890
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
