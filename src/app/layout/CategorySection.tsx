"use client"

import React from 'react'
import CategoryCard from '../components/CategoryCard'
import SectionHeader from '../components/SectionHeader'

const CategorySection = () => {
  const categories = [
    {
      categoria: "Educação",
      imagem: "/testImgs/100x100.svg"
    },
    {
      categoria: "Meio Ambiente",
      imagem: "/testImgs/100x100.svg"
    },
    {
      categoria: "Saúde",
      imagem: "/testImgs/100x100.svg"
    },
    {
      categoria: "Direitos Humanos",
      imagem: "/testImgs/100x100.svg"
    },
    {
      categoria: "Assistência Social",
      imagem: "/testImgs/100x100.svg"
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