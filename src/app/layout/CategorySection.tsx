"use client"

import React from 'react'
import CategoryCard from '../components/CategoryCard'
import SectionHeader from '../components/SectionHeader'

const CategorySection = () => {
  const categories = [
    {
      categoria: "Educação",
      imagem: "/categoryImgs/Educacao.png"
    },
    {
      categoria: "Meio Ambiente",
      imagem: "/categoryImgs/MeioAmbiente.png"
    },
    {
      categoria: "Saúde",
      imagem: "/categoryImgs/Saude.png"
    },
    {
      categoria: "Direitos Humanos",
      imagem: "/categoryImgs/DireitosHumanos.png"
    },
    {
      categoria: "Assistência Social",
      imagem: "/categoryImgs/AssistenciaSocial.png"
    }
  ]

  return (
    <div>
      <SectionHeader
        title='ONGs por categoria'
      />
      <div className='flex flex-col gap-4'>
        {categories.map((category, index) => {
          return (
            <CategoryCard
              category={category.categoria}
              imageSrc={category.imagem}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}

export default CategorySection