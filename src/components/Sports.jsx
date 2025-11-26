import React from 'react';

const Sports = () => {
  const sports = [
    {
      id: 1,
      name: 'Sport Climbing',
      icon: '🧗',
      description: 'Tingkatkan kekuatan dan ketahanan dengan olahraga panjat tebing'
    },
    {
      id: 2,
      name: 'Inline Skate',
      icon: '⛸️',
      description: 'Latih keseimbangan dan koordinasi dengan inline skating'
    },
    {
      id: 3,
      name: 'Skate Board',
      icon: '🛹',
      description: 'Pelajari teknik skateboarding dari dasar hingga mahir'
    },
    {
      id: 4,
      name: 'Atletik',
      icon: '🏃',
      description: 'Kembangkan kecepatan dan stamina melalui atletik'
    },
    {
      id: 5,
      name: 'Gymnastic',
      icon: '🤸',
      description: 'Kembangkan fleksibilitas, kekuatan, dan koordinasi melalui senam lantai'
    },
    {
      id: 6,
      name: 'Swimming',
      icon: '🏊',
      description: 'Kuasai berbagai gaya renang dengan pelatih profesional'
    }
  ];

  return (
    <section id="sports" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Our Sports
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-blue-800 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Pilih dari 6 cabang olahraga yang kami tawarkan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sports.map((sport) => (
            <div 
              key={sport.id}
              className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 hover:border-blue-300 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/50 group-hover:to-transparent transition-all duration-500 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {sport.icon}
                </div>
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-extrabold text-blue-800 mr-3">{sport.id}.</span>
                  <h3 className="text-2xl font-bold text-gray-900">{sport.name}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-base">{sport.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sports;

