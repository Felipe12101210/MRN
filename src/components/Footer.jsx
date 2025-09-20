const Footer = ({ currentDate }) => {
  return (
    <footer className="py-10 text-center bg-gray-800 text-gray-400 animate__fadeIn animate__delay-6s">
      <p className="mb-4">Hecho con ❤️ para Nicolle Mariana Rivera Niño</p>
      <p className="text-sm opacity-70">© {currentDate.getFullYear()} - Un regalo eterno</p>
    </footer>
  );
};

export default Footer;
