import { useEffect, useState } from "react";

// ✅ Importar imágenes automáticamente (Vite)
const modules = import.meta.glob("../assets/images/*.{jpg,jpeg,webp}", { eager: true });
const images = Object.values(modules).map((m) => m.default);

const GallerySection = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRotation((r) => r + 0.3), 30);
    return () => clearInterval(id);
  }, []);

  // 📏 Radios según el ancho de pantalla
  const getRadius = () => {
    if (window.innerWidth < 640) return 300; // móvil
    if (window.innerWidth < 1024) return 500; // tablet
    return 700; // desktop
  };

  const [radius, setRadius] = useState(getRadius());

  useEffect(() => {
    const handleResize = () => setRadius(getRadius());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 py-16 px-4">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-300 mb-10 sm:mb-16 drop-shadow-lg">
        Galería 3D
      </h2>

      <div
        className="relative"
        style={{
          width: radius * 2,
          height: radius * 1.5,
          perspective: "1600px",
        }}
      >
        <div
          className="absolute inset-0 transition-transform duration-100 ease-linear"
          style={{
            transformStyle: "preserve-3d",
            transform: `translateZ(-${radius * 0.9}px) rotateY(${rotation}deg)`,
          }}
        >
          {images.map((src, idx) => {
            const angle = (360 / images.length) * idx;
            const rad = ((rotation + angle) * Math.PI) / 180;
            const scaleVal = 0.8 + 0.3 * (Math.cos(rad) + 1) / 2;

            return (
              <div
                key={idx}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px) rotateY(-${angle}deg) scale(${scaleVal})`,
                  transition: "transform 0.3s ease-out",
                }}
              >
                <img
                  src={src}
                  alt={`Imagen ${idx + 1}`}
                  className="
                    w-[250px] h-[170px] 
                    sm:w-[290px] sm:h-[280px] 
                    lg:w-[350px] lg:h-[350px]
                    object-cover rounded-xl lg:rounded-2xl
                    shadow-xl lg:shadow-2xl border-2 sm:border-4 border-pink-400
                    hover:scale-110 transition-transform duration-300
                  "
                  draggable={false}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

