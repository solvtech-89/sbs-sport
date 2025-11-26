import React from "react";

const Programs = () => {
  const programs = [
    {
      title: "Private Class",
      description: "Pelatihan one-on-one dengan instruktur profesional",
      features: [
        "Perhatian penuh dari instruktur",
        "Program disesuaikan dengan kebutuhan",
        "Jadwal fleksibel",
        "Progress lebih cepat",
      ],
      icon: "👤",
    },
    {
      title: "Group Class",
      description: "Maksimal 3 peserta per grup",
      features: [
        "Belajar bersama teman",
        "Lingkungan kompetitif yang sehat",
        "Biaya lebih terjangkau",
        "Membangun teamwork",
      ],
      icon: "👥",
    },
    {
      title: "Basic Class",
      description: "Program untuk pemula yang baru memulai",
      features: [
        "Pembelajaran dari dasar",
        "Teknik fundamental",
        "Pengenalan peralatan",
        "Safety procedures",
      ],
      icon: "📚",
    },
    {
      title: "Competition",
      description: "Program persiapan kompetisi",
      features: [
        "Training intensif",
        "Strategi kompetisi",
        "Mental coaching",
        "Simulasi pertandingan",
      ],
      icon: "🏆",
    },
  ];

  return (
    <section
      id="programs"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Our Programs
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-blue-800 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Program kami dirancang untuk semua level
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 relative overflow-hidden"
            >
              {/* Accent gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-800"></div>

              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {program.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {program.description}
              </p>
              <ul className="space-y-3">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start group/item">
                    <svg
                      className="h-6 w-6 text-blue-800 mr-3 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {feature}
                    </span>
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
