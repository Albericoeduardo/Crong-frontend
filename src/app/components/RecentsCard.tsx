// components/RecentCard.tsx
import Image from 'next/image';
import React from 'react';

interface RecentCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const RecentCard: React.FC<RecentCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="border rounded-md shadow-sm p-4 w-64 bg-white">
      <div className="w-full h-32 bg-gray-100 rounded-md mb-4 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          width={360}
          height={240}
          className='w-full h-full object-cover'
        />
      </div>
      <h2 className="text-lg font-bold mb-1">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default RecentCard;
