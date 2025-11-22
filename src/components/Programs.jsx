import React from 'react';

const Programs = () => {
  const programs = [
    {
      title: 'Private Class',
      description: 'Pelatihan one-on-one dengan instruktur profesional',
      features: [
        'Perhatian penuh dari instruktur',
        'Program disesuaikan dengan kebutuhan',
        'Jadwal fleksibel',
        'Progress lebih cepat'
      ],
      icon: '👤'
    },
    {
      title: 'Group Class',
      description: 'Maksimal 3 peserta per grup',
      features: [
        'Belajar bersama teman',
        'Lingkungan kompetitif yang sehat',
        'Biaya lebih terjangkau',
        'Membangun teamwork'
      ],
      icon: '👥'
    },
    {
      title: 'Basic Class',
      description: 'Program untuk pemula yang baru memulai',
      features: [
        'Pembelajaran dari dasar',
        'Teknik fundamental',
        'Pengenalan peralatan',
        'Safety procedures'
      ],
      icon: '📚'
    },
    {
      title: 'Competition',
      description: 'Program persiapan kompetisi',
      features: [
        'Training intensif',
        'Strategi kompetisi',
        'Mental coaching',
        'Simulasi pertandingan'
      ],
      icon: '🏆'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Program kami dirancang untuk semua level
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{program.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-6">{program.description}</p>
              <ul className="space-y-3">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;

