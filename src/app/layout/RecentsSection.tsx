import React from 'react'
import RecentsCard from '../components/RecentsCard'
import SectionHeader from '../components/SectionHeader'

const RecentsSection = () => {
    const recents = [
        {
          titulo: "Title",
          imagem: "/360x240.svg",
          descricao: "Description"
        },
        {
          titulo: "Title",
          imagem: "/360x240.svg",
          descricao: "Description"
       },
        {
          titulo: "Title",
          imagem: "/360x240.svg",
          descricao: "Description"
        },
        {
          titulo: "Title",
          imagem: "/360x240.svg",
          descricao: "Description"
        },
        {
          titulo: "Title",
          imagem: "/360x240.svg",
          descricao: "Description"
       },
        {
          titulo: "Title",
          imagem: "/360x240.svg",
          descricao: "Description"
        },
      ]

  return (
    <div>
      <SectionHeader
        title='ONGs Recém adicionadas'
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {recents.map((recent, index) => {
          return (
            <RecentsCard
              imageSrc={recent.imagem}
              title={recent.titulo}
              description={recent.descricao}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}

export default RecentsSection