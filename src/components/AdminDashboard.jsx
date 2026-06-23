import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Users, Phone, RefreshCw, CheckCircle, XCircle, Loader2, FileText, Printer } from 'lucide-react';
import PrintableBrosur from './PrintableBrosur';

const AdminDashboard = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);
  const [showBrosur, setShowBrosur] = useState(false);

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('registrations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setRegistrations(data || []);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching registrations:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      setUpdatingId(id);
      const { error } = await supabase
        .from('registrations')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;

      // Update local state
      setRegistrations(prev =>
        prev.map(reg =>
          reg.id === id ? { ...reg, status: newStatus } : reg
        )
      );
    } catch (err) {
      console.error('Error updating status:', err);
      alert('Gagal mengubah status: ' + err.message);
    } finally {
      setUpdatingId(null);
    }
  };

  const formatWhatsAppLink = (phone) => {
    // Remove non-numeric characters and ensure it starts with 62
    let cleaned = phone.replace(/\D/g, '');
    if (cleaned.startsWith('0')) {
      cleaned = '62' + cleaned.substring(1);
    } else if (!cleaned.startsWith('62')) {
      cleaned = '62' + cleaned;
    }
    return `https://wa.me/${cleaned}?text=${encodeURIComponent('Assalamu\'alaikum, kami dari Pondok Pesantren Al-Anwar menghubungi Anda terkait pendaftaran santri baru.')}`;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Diterima':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Ditolak':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Pending':
      default:
        return 'bg-amber-100 text-amber-800 border-amber-200';
    }
  };

  if (showBrosur) {
    return <PrintableBrosur onClose={() => setShowBrosur(false)} />;
  }

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-emerald-900 mb-2">
                Dashboard Administrasi
              </h2>
              <p className="text-slate-600">
                Kelola pendaftaran santri baru dan cetak brosur digital
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={fetchRegistrations}
                className="inline-flex items-center px-4 py-2 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              <button
                onClick={() => setShowBrosur(true)}
                className="inline-flex items-center px-4 py-2 bg-emerald-700 text-white font-medium rounded-lg hover:bg-emerald-800 transition-colors"
              >
                <FileText className="w-4 h-4 mr-2" />
                Cetak Brosur
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Total Pendaftaran</p>
                <p className="text-3xl font-bold text-emerald-900">{registrations.length}</p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-emerald-700" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Pending</p>
                <p className="text-3xl font-bold text-amber-600">
                  {registrations.filter(r => r.status === 'Pending' || !r.status).length}
                </p>
              </div>
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-amber-700" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Diterima</p>
                <p className="text-3xl font-bold text-emerald-600">
                  {registrations.filter(r => r.status === 'Diterima').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-emerald-700" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Ditolak</p>
                <p className="text-3xl font-bold text-red-600">
                  {registrations.filter(r => r.status === 'Ditolak').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
            <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-800">Error Loading Data</h3>
              <p className="text-red-700 text-sm mt-1">{error}</p>
              <button
                onClick={fetchRegistrations}
                className="mt-2 text-sm text-red-800 underline hover:text-red-900"
              >
                Coba Lagi
              </button>
            </div>
          </div>
        )}

        {/* Registrations Table */}
        <div className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                    Nama Santri
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                    Orang Tua
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                    WhatsApp
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                    Pendidikan
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                    Tanggal
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {loading ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-12 text-center">
                      <Loader2 className="w-8 h-8 animate-spin mx-auto text-emerald-700 mb-3" />
                      <p className="text-slate-600">Memuat data...</p>
                    </td>
                  </tr>
                ) : registrations.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-12 text-center">
                      <Users className="w-12 h-12 mx-auto text-slate-300 mb-3" />
                      <p className="text-slate-600">Belum ada pendaftaran</p>
                    </td>
                  </tr>
                ) : (
                  registrations.map((reg) => (
                    <tr key={reg.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{reg.student_name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{reg.parent_name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{reg.whatsapp}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded">
                          {reg.education_level}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(reg.status || 'Pending')}`}>
                          {reg.status || 'Pending'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">
                          {new Date(reg.created_at).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <a
                            href={formatWhatsAppLink(reg.whatsapp)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-1.5 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                            title="Hubungi via WhatsApp"
                          >
                            <Phone className="w-4 h-4" />
                          </a>
                          <select
                            value={reg.status || 'Pending'}
                            onChange={(e) => updateStatus(reg.id, e.target.value)}
                            disabled={updatingId === reg.id}
                            className="px-3 py-1.5 border border-slate-300 rounded-md text-sm bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 disabled:opacity-50"
                          >
                            <option value="Pending">Pending</option>
                            <option value="Diterima">Diterima</option>
                            <option value="Ditolak">Ditolak</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
