import ImgMRN from '../assets/images/3.jpg';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-16 px-4 sm:px-6 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 text-center text-white transition-all duration-1000 ease-in-out transform animate__fadeIn"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Título */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-12 sm:mb-16 animate__fadeIn animate__delay-1s">
          💖
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-center animate__fadeIn animate__delay-2s">
          {/* Imagen */}
          <div className="relative transition-transform duration-500 transform hover:scale-105">
            <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden shadow-2xl bg-gradient-to-tl from-pink-400 to-purple-600">
              <img
                src={ImgMRN}
                alt="Nicolle Mariana"
                className="w-full h-full object-cover hover:scale-110 transition-transform"
              />
            </div>
          </div>

          {/* Descripción */}
          <div className="space-y-6 px-2 sm:px-0">
            <h3 className="text-2xl sm:text-3xl font-semibold text-pink-300">
              Nicolle Mariana Rivera Niño
            </h3>
            <p className="text-base sm:text-lg text-gray-300 tracking-wide leading-relaxed">
              Eres la persona más increíble que he conocido. Tu sonrisa ilumina mis días, 
              y tu bondad inspira a seguir con todo.
            </p>

            {/* Características */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {["Increíble", "Amorosa", "Única", "Feliz"].map((quality, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-tl from-pink-400 to-purple-500 p-4 sm:p-6 rounded-lg text-center shadow-lg transform hover:scale-105 transition-all"
                >
                  <div className="text-3xl sm:text-4xl mb-1 sm:mb-2 text-pink-300">
                    {["✨", "💖", "🌟", "😊"][idx]}
                  </div>
                  <div className="text-lg sm:text-xl font-medium">{quality}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
