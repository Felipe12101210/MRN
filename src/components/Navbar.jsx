const Navbar = ({ activeSection, scrollToSection }) => {
  return (
    <nav className="fixed top-0 w-full bg-gray-800 bg-opacity-80 backdrop-blur-lg z-50 py-6 shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo o título */}
        <div
          className="text-3xl font-bold text-pink-300 cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-110"
          onClick={() => scrollToSection("home")}
        >
          Felipe 💖
        </div>

        {/* Menú de navegación */}
        <div className="hidden md:flex space-x-8 text-lg">
          {["home", "Mas", "LT", "galeria", "flores"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`px-6 py-2 rounded-lg transition duration-300 ease-in-out transform ${
                activeSection === item
                  ? "bg-pink-500 text-white shadow-xl scale-110"
                  : "hover:bg-pink-400 hover:text-white hover:scale-110"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
