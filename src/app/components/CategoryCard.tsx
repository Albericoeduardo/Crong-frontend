"use client"

import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

interface CategoryCardProps {
  imageSrc: string;
  category: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ imageSrc, category }) => {
  const router = useRouter();

  const handleExploreClick = () => {
    router.push(`/ongs?category=${category}`);
  }

  return (
    <div className="flex md:flex-row items-center justify-between border rounded-lg shadow-sm p-4 bg-white w-full min-w-72 sm:min-w-96">
      <div className="flex items-center">
      <div className="w-12 h-12 bg-gray-100 rounded-md overflow-hidden mr-4">
        <Image
        src={imageSrc}
        alt={category}
        width={100}
        height={100}
        className='w-full h-full object-cover'
        />
      </div>
      <div>
        <h2 className="text-sm font-semibold">{category}</h2>
      </div>
      </div>
      <button
        className="px-4 py-2 text-black bg-orange-950 rounded-md text-xs font-semibold hover:bg-brown-700 transition"
        onClick={handleExploreClick}
      >
      Explorar
      </button>
    </div>
  );
};

export default CategoryCard;
