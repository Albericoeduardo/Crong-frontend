import React from 'react';

interface OngCardProps {
  title: string;
  location: string;
  backgroundImage: string;
}

const OngCard: React.FC<OngCardProps> = ({ title, location, backgroundImage }) => {
  return (
    <div
      className="flex items-center justify-center text-center bg-cover bg-center rounded-lg shadow-md relative"
      style={{ backgroundImage: `url(${backgroundImage})`, width: '400px', height: '620px' }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      <div>
        <h3 className="text-lg font-bold text-black">{title}</h3>
        <p className="text-sm text-black font-semibold">{location}</p>
      </div>
    </div>
  );
};

export default OngCard;
