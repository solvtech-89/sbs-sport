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
      color: 'from-blue-500 to-blue-600'
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
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Price List
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Pilih paket yang sesuai dengan kebutuhan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                plan.popular ? 'ring-4 ring-purple-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Popular
                </div>
              )}
              
              <div className={`bg-gradient-to-r ${plan.color} p-8 text-white`}>
                <h3 className="text-3xl font-bold mb-2">{plan.type}</h3>
                <div className="flex items-end mb-2">
                  <span className="text-5xl font-bold">Rp {plan.price}</span>
                </div>
                <p className="text-blue-100 text-lg">{plan.duration}</p>
              </div>

              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full bg-gradient-to-r ${plan.color} text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
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

