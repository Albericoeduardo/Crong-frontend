import React from 'react'
import CategoryCard from '../components/CategoryCard'

const CategorySection = () => {
  const categories = [
    {
      categoria: "categoria",
      imagem: "/100x100.svg",
      subcategoria: "subcategoria"
    },
    {
      categoria: "categoria",
      imagem: "/100x100.svg",
      subcategoria: "subcategoria"
    },
    {
      categoria: "categoria",
      imagem: "/100x100.svg",
      subcategoria: "subcategoria"
    },
    {
      categoria: "categoria",
      imagem: "/100x100.svg",
      subcategoria: "subcategoria"
    },
    {
      categoria: "categoria",
      imagem: "/100x100.svg",
      subcategoria: "subcategoria"
    },
    {
      categoria: "categoria",
      imagem: "/100x100.svg",
      subcategoria: "subcategoria"
    },
  ]
  return (
    <div className='flex flex-col gap-4'>
      {categories.map((category, index) => {
        return (
          <CategoryCard
            category={category.categoria}
            imageSrc={category.imagem}
            subCategory={category.subcategoria}
            key={index}
          />
        )
      })}
    </div>
  )
}

export default CategorySection