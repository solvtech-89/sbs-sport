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
    <section id="sports" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Sports
          </h2>
          <div className="w-24 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Pilih dari 6 cabang olahraga yang kami tawarkan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sports.map((sport) => (
            <div 
              key={sport.id}
              className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-200"
            >
              <div className="text-6xl mb-4">{sport.icon}</div>
              <div className="flex items-center mb-3">
                <span className="text-2xl font-bold text-blue-800 mr-2">{sport.id}.</span>
                <h3 className="text-2xl font-bold text-gray-900">{sport.name}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{sport.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sports;

