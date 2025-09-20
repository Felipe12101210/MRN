import { FaHeart, FaBirthdayCake, FaSeedling, FaRing, FaBook } from "react-icons/fa"; // Íconos

const TimelineSection = () => {
  const events = [
    { date: "10/11", title: "Aniversario", icon: <FaHeart className="text-pink-500 text-2xl sm:text-3xl md:text-4xl" />, color: "bg-pink-500", side: "left", description: "Celebramos un año juntos." },
    { date: "16/07", title: "Mi Cumpleaños", icon: <FaBirthdayCake className="text-yellow-500 text-2xl sm:text-3xl md:text-4xl" />, color: "bg-yellow-500", side: "right", description: "Un año más de vida." },
    { date: "26/10", title: "El cumpleaños de MARISSSSSS!!!!", icon: <FaBirthdayCake className="text-blue-500 text-2xl sm:text-3xl md:text-4xl" />, color: "bg-blue-500", side: "left", description: "Celebramos su día especial." },
    { date: "20/09", title: "Flores Amarillas", icon: <FaSeedling className="text-green-500 text-2xl sm:text-3xl md:text-4xl" />, color: "bg-green-500", side: "right", description: "Dia importante" },
    { date: "??/??", title: "Boda (Próximamente)", icon: <FaRing className="text-purple-500 text-2xl sm:text-3xl md:text-4xl" />, color: "bg-purple-500", side: "left", description: "Nuestra boda está en camino." },
  ];

  return (
    <section id="timeline" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 md:px-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-pink-400 mb-12">
          Línea de Tiempo Futurista
        </h2>

        {/* Línea de tiempo */}
        <div className="relative">
          {/* Línea central solo en desktop */}
          <div className="hidden md:block absolute left-1/2 w-1 bg-gradient-to-b from-cyan-400 to-purple-400 h-full transform -translate-x-1/2 z-0"></div>

          {/* Eventos */}
          {events.map((event, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col md:flex-row items-center md:items-start mb-12 z-10 ${
                event.side === "left" ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Ícono del evento */}
              <div className={`${event.color} w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex justify-center items-center shadow-xl mb-4 md:mb-0`}>
                {event.icon}
              </div>

              {/* Contenedor de fecha, título y descripción */}
              <div
                className={`p-4 sm:p-6 bg-gray-800 rounded-lg border-2 border-gray-600 shadow-lg text-center md:text-left ${
                  event.side === "right" ? "md:ml-6" : "md:mr-6"
                }`}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{event.date}</h3>
                <p className="mt-1 text-base sm:text-lg md:text-xl">{event.title}</p>
                <p className="text-gray-300 mt-2 text-sm sm:text-base">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
