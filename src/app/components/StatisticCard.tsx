// components/Card.tsx
import Image from 'next/image';
import React from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md w-64">
      <Image
        src={imageSrc}
        alt={title}
        width={140}
        height={140}
      />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
