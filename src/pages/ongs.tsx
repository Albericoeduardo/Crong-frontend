import React, { useState } from 'react';
import Image from 'next/image';
import db from '../data/db';
import OngCard from '@/app/components/OngCard';
import Navbar from '@/app/components/Navbar';
import { useSearchParams } from 'next/navigation';

const OngsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOng, setSelectedOng] = useState<null | {
    ID: number;
    Nome: string;
    Categoria: string;
    Descricao: string;
    phone: string;
    email: string;
    imagem: string;
  }>(null);

  const searchParams = useSearchParams();
  const selectedCategory = searchParams ? searchParams.get('category') || '' : '';
  const selectedRecentOng = searchParams ? searchParams.get('name') || '' : '';

  const categories = [...new Set(db.map((ong) => ong.Categoria))];

  const filteredOngs = db.filter(ong => 
    ong.Nome.toLowerCase().includes(searchTerm.toLowerCase()) && 
    (selectedCategory === '' || ong.Categoria === selectedCategory) &&
    (selectedRecentOng === '' || ong.Nome === selectedRecentOng)
  );

  const closeModal = () => {
    setSelectedOng(null);
  };

  return (
    <div className='flex justify-center flex-col items-center gap-10'>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-row items-center gap-4 mb-4 py-10">
        <input
          type="text"
          placeholder="Search ONGs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <select
          value={selectedCategory}
          onChange={(e) => {
            const category = e.target.value;
            if (category === '') {
              window.location.href = '/ongs';
            } else {
              window.location.href = `/ongs?category=${category}`;
            }
          }}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">Todas as Categorias</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredOngs.map((ong) => (
          <OngCard
            key={ong.ID}
            title={ong.Nome}
            location={ong.Categoria}
            backgroundImage={ong.imagem}
            onClick={() => setSelectedOng(ong)}
          />
        ))}
      </div>
      {selectedOng && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h2 className="text-xl font-bold">{selectedOng.Nome}</h2>
            <p><strong>Descrição:</strong> {selectedOng.Descricao}</p>
            <p><strong>Email:</strong> {selectedOng.email}</p>
            <p><strong>Telefone:</strong> {selectedOng.phone}</p>
            <Image src={selectedOng.imagem} alt={selectedOng.Nome} className="my-4 w-full h-auto rounded" layout="responsive" width={500} height={300} />
            <button 
              onClick={closeModal} 
              className="px-4 py-2 bg-red-500 text-white rounded mt-4"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  )
};

export default OngsPage;
