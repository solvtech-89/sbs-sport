import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            About Us
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-blue-800 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              SBS Sport Academy
            </h3>
            <div className="space-y-5">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Fokus SBS Sport Academy adalah akademi olahraga "privat" multi
                disiplin untuk usia diatas 5 tahun.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Kami berkomitmen untuk membantu setiap anak mengembangkan
                potensi olahraga mereka dengan pendekatan yang profesional dan
                personal.
              </p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
            <h4 className="text-3xl font-bold text-gray-900 mb-8">
              Why Choose Us?
            </h4>
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-blue-900 to-blue-800 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="h-7 w-7"
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
                  </div>
                </div>
                <div className="ml-5 flex-1">
                  <h5 className="text-xl font-bold text-gray-900 mb-1">
                    Multi-Discipline Sports
                  </h5>
                  <p className="text-gray-600 text-base">
                    6 cabang olahraga dalam satu akademi
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-blue-900 to-blue-800 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="h-7 w-7"
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
                  </div>
                </div>
                <div className="ml-5 flex-1">
                  <h5 className="text-xl font-bold text-gray-900 mb-1">
                    Private & Group Classes
                  </h5>
                  <p className="text-gray-600 text-base">
                    Fleksibilitas pilihan kelas sesuai kebutuhan
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-blue-900 to-blue-800 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="h-7 w-7"
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
                  </div>
                </div>
                <div className="ml-5 flex-1">
                  <h5 className="text-xl font-bold text-gray-900 mb-1">
                    Professional Coaches
                  </h5>
                  <p className="text-gray-600 text-base">
                    Pelatih berpengalaman dan tersertifikasi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
