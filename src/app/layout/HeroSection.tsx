import React from 'react';

const HeroSection = () => {
  const heroSectionImg = '/bgIMG.png';

  return (
    <div
      className="relative h-screen w-full bg-fixed bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroSectionImg})`,
      }}
    >
      <div className="absolute inset-0 bg-slate-800 opacity-60"></div>
      <div className="relative text-center text-white px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Ajude a mudar vidas, ajude uma ONG!
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Conectamos você com ONGs confiáveis para transformar o Brasil. Doe para alavancar projetos socioambientais e acompanhe como sua contribuição faz a diferença.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="ongs"
            className="px-6 py-3 bg-orange-950 hover:bg-white text-white hover:text-orange-950 font-semibold rounded-lg shadow-md transition"
          >
            Conheça as ONGs
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
