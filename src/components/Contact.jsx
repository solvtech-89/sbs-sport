import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Contact Us
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 mx-auto rounded-full mb-6"></div>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
            Hubungi kami untuk informasi lebih lanjut
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 shadow-2xl">
              <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white/20">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">Alamat</h4>
                    <p className="text-blue-100">
                      Jl.Gunung Merapi No 10 Rt.02 Rw.05<br />
                      Bancarkembar, Purwokerto Utara, Banyumas, Jawa Tengah
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white/20">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">Telepon</h4>
                    <a href="tel:082223608424" className="text-blue-100 hover:text-white transition">
                      082223608424
                    </a>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white/20">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">Media Sosial</h4>
                    <div className="space-y-2">
                      <a href="https://instagram.com/sbs_privatsport" target="_blank" rel="noopener noreferrer" className="block text-blue-100 hover:text-white transition">
                        📱 @sbs_privatsport
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-10 text-gray-900 shadow-2xl">
            <h3 className="text-3xl font-bold mb-8">Send Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all duration-300 hover:border-gray-400"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all duration-300 hover:border-gray-400"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">No. Telepon</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all duration-300 hover:border-gray-400"
                  placeholder="08xx-xxxx-xxxx"
                />
              </div>

              <div>
                <label htmlFor="sport" className="block text-sm font-semibold mb-2">Pilih Olahraga</label>
                <select
                  id="sport"
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all duration-300 hover:border-gray-400"
                >
                  <option value="">Pilih olahraga</option>
                  <option value="climb">Sport Climbing</option>
                  <option value="inline">Inline Skate</option>
                  <option value="skateboard">Skate Board</option>
                  <option value="atletik">Atletik</option>
                  <option value="gymnastic">Gymnastic</option>
                  <option value="swimming">Swimming</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">Pesan</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all duration-300 hover:border-gray-400"
                  placeholder="Tuliskan pesan Anda..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white py-4 rounded-xl font-bold hover:from-blue-800 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

