import React from 'react';

const Pricing = () => {
  const pricingPlans = [
    {
      type: 'Private',
      price: '75K',
      duration: 'per 1 jam',
      features: [
        'One-on-one training',
        'Jadwal fleksibel',
        'Personalized program',
        'Full attention dari coach',
        'Progress report'
      ],
      popular: false,
      color: 'from-blue-800 to-blue-900'
    },
    {
      type: 'Group Class',
      price: '125K',
      duration: 'per 1 jam (max 3 orang)',
      features: [
        'Maksimal 3 peserta',
        'Interactive learning',
        'Team building',
        'Competitive environment',
        'Cost effective'
      ],
      popular: true,
      color: 'from-blue-700 to-blue-800'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Price List
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-blue-800 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 border ${
                plan.popular ? 'ring-4 ring-blue-700 border-blue-300' : 'border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-800 to-blue-900 text-white px-5 py-2 text-sm font-bold rounded-bl-2xl shadow-lg z-10">
                  Popular
                </div>
              )}
              
              <div className={`bg-gradient-to-br ${plan.color} p-10 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-3">{plan.type}</h3>
                  <div className="flex items-end mb-3">
                    <span className="text-6xl font-extrabold">Rp {plan.price}</span>
                  </div>
                  <p className="text-blue-100 text-lg font-medium">{plan.duration}</p>
                </div>
              </div>

              <div className="p-10">
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start group/item">
                      <svg className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full bg-gradient-to-r ${plan.color} text-white py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
                >
                  Daftar Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            💡 Semua harga sudah termasuk peralatan dan asuransi
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

