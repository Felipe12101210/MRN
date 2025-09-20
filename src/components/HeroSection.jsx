import { useEffect, useState } from "react";

const HeroSection = () => {
  const messages = [
    "Tu sonrisa ilumina mi mundo 🌟",
    "Cada momento contigo es un regalo 💝",
    "Eres el sueño que nunca quiero despertar 💭",
    "Tu amor es la razón de mi felicidad 💖",
    "Siempre a tu lado, sin importar la distancia 🌍",
    "Juntos somos imparables 💫",
    "Tu risa es mi música favorita 🎶",
    "Eres mi sol en los días nublados 🌞",
  ];

  const [offset, setOffset] = useState(0);
  const [speed, setSpeed] = useState(-2); // velocidad por defecto

  useEffect(() => {
    // Detectar tamaño de pantalla y ajustar velocidad
    const updateSpeed = () => {
      if (window.innerWidth < 640) {
        setSpeed(-1); // móvil
      } else if (window.innerWidth < 1024) {
        setSpeed(-2); // tablet
      } else {
        setSpeed(-3); // desktop
      }
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);

    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset + speed) % (messages.length * 300));
    }, 10);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", updateSpeed);
    };
  }, [messages.length, speed]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 text-center bg-gradient-to-br via-pink-500 from-purple-600 to-indigo-700"
    >
      {/* Título */}
      <div className="text-2xl sm:text-4xl md:text-6xl font-semibold mb-4 sm:mb-6 text-white leading-tight animate__animated animate__pulse animate__infinite">
        Para Nicolle Mariana / El amor de mi vida 💖
      </div>

      {/* Descripción */}
      <p className="text-base sm:text-lg md:text-2xl mb-8 sm:mb-12 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed opacity-90">
        Hoy quiero hacer de este día algo aún más especial. 🌼 Tu presencia ilumina mi mundo y espero que este detalle te encante.
      </p>

      {/* Carrusel */}
      <div className="relative w-full overflow-hidden mb-8 sm:mb-12 p-4 sm:p-6 border-2 border-purple-400 rounded-lg shadow-lg bg-opacity-60 bg-gradient-to-r from-pink-500 to-purple-600 backdrop-blur-xl">
        <div
          className="flex whitespace-nowrap transition-transform duration-1000"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className="inline-block mr-6 sm:mr-12 md:mr-32 text-lg sm:text-xl md:text-3xl font-semibold text-black opacity-90"
            >
              {message}
            </div>
          ))}
        </div>
      </div>

      {/* Texto animado */}
      <div className="relative group mb-6 sm:mb-10">
        <div className="text-xl sm:text-2xl md:text-4xl text-white font-semibold leading-snug">
          <span className="text-pink-300">¡Tu</span>{" "}
          <span className="text-indigo-500">sonrisa</span>{" "}
          <span className="text-purple-400">cambia</span> mi mundo 🌍
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
      </div>
    </section>
  );
};

export default HeroSection;
