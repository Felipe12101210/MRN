import { useState } from "react";
import { useSpring, animated } from "react-spring";
import florImage from '../assets/images/Flor.png'; // Asegúrate de que la ruta sea correcta

const FlowersSection = () => {
  const [isClicked, setIsClicked] = useState(false);

  // Animación de flotación continua para la flor
  const { y } = useSpring({
    to: { y: 30 },
    from: { y: 15 },
    config: { tension: 80, friction: 8 },
    loop: { reverse: true },
  });

  // Animación de la carta
  const { opacity: cardOpacity, transform, height } = useSpring({
    opacity: isClicked ? 1 : 0,
    transform: isClicked ? "scale(1)" : "scale(0)",
    height: isClicked ? "auto" : "0px",
    config: { tension: 300, friction: 25 },
  });

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <section
      id="flowers"
      className="min-h-screen bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 flex justify-center items-center py-12 sm:py-16 px-4"
    >
      <div className="container mx-auto flex flex-col items-center max-w-xl p-4 sm:p-6 md:p-8 rounded-lg shadow-lg bg-white text-center">
        {/* Título */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-pink-500 mb-6 sm:mb-8">
          El Día de las Flores Amarillas
        </h2>

        {/* Descripción */}
        <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed">
          El 20 de septiembre es un día muy especial para nosotros, y las flores amarillas son un símbolo de nuestra conexión.
        </p>

        {/* Flor animada */}
        <animated.div
          style={{
            transform: y.to((yVal) => `translateY(${yVal}px)`),
          }}
          className="cursor-pointer mb-6 sm:mb-8"
          onClick={handleClick}
        >
          <img
            src={florImage}
            alt="Flor"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 object-contain"
          />
        </animated.div>

        {/* Carta al hacer clic */}
        <animated.div
          style={{
            opacity: cardOpacity,
            transform: transform,
            height: height,
          }}
          className="mt-4 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-lg shadow-xl mx-auto max-w-md transition-all duration-600 ease-in-out"
        >
          <div className="text-lg sm:text-xl font-semibold mb-4">
            ¡Una carta especial para ti!
          </div>
          <p className="text-base sm:text-lg text-gray-200 mb-4">
            Nicolle, cada flor amarilla es un recordatorio de lo especial que eres para mí. 
            Este ramo es solo un pequeño símbolo de mi amor por ti.
          </p>
          <p className="text-base sm:text-lg text-gray-200">
            Gracias por cada momento compartido. Te quiero mucho. 💖
          </p>
        </animated.div>
      </div>
    </section>
  );
};

export default FlowersSection;

