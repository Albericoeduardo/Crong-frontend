import Image from 'next/image';
import React from 'react';

interface StatisicCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const StatisicCard: React.FC<StatisicCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md w-64 gap-5">
      <div className='flex flex-col items-center gap-5'>
        <Image
          src={imageSrc}
          alt={title}
          width={140}
          height={140}
        />
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
      </div>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
};

export default StatisicCard;
