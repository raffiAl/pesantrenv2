import { BookOpen, GraduationCap, Users, Trophy } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Tahfidz Al-Qur\'an',
      description: 'Program menghafal Al-Qur\'an dengan metode mutqin dan bersanad, dibimbing oleh hafidz-hafidz berpengalaman.',
      color: 'bg-emerald-100 text-pesantren-green',
    },
    {
      icon: GraduationCap,
      title: 'Kurikulum Formal',
      description: 'Mengintegrasikan kurikulum nasional dengan kurikulum pesantren untuk menghasilkan lulusan yang kompetitif.',
      color: 'bg-amber-100 text-amber-700',
    },
    {
      icon: Users,
      title: 'Pengajar Profesional',
      description: 'Diasuh oleh ulama dan guru-guru lulusan universitas ternama dalam dan luar negeri.',
      color: 'bg-blue-100 text-blue-700',
    },
    {
      icon: Trophy,
      title: 'Ekstrakurikuler',
      description: 'Beragam kegiatan ekstrakurikuler untuk mengembangkan bakat dan minat santri di berbagai bidang.',
      color: 'bg-purple-100 text-purple-700',
    },
  ];

  return (
    <section id="program" className="py-20 bg-pesantren-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-pesantren-green/10 text-pesantren-green font-medium rounded-full text-sm mb-4">
            Keunggulan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-pesantren-green mb-4">
            Mengapa Memilih Al-Anwar?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Kami menawarkan pendidikan holistik yang menyeimbangkan ilmu agama dan ilmu umum 
            untuk mempersiapkan generasi muslim yang unggul.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Learn More Link */}
              <a
                href="#program"
                className="inline-flex items-center mt-4 text-pesantren-green font-medium hover:text-pesantren-emerald transition-colors duration-200"
              >
                Selengkapnya
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
