import React from 'react'
import StatisicCard from '../components/StatisticCard'
import SectionHeader from '../components/SectionHeader'

const StatisticSection = () => {
    const statistics = [
      {
        titulo: "76 ONGs",
        imagem: "/140x140.svg",
        descricao: "São 76 ONGs por todo o Brasil cadastradas na nossa plataforma"
      },
      {
        titulo: "76 ONGs",
        imagem: "/140x140.svg",
        descricao: "São 76 ONGs por todo o Brasil cadastradas na nossa plataforma"
     },
      {
        titulo: "76 ONGs",
        imagem: "/140x140.svg",
        descricao: "São 76 ONGs por todo o Brasil cadastradas na nossa plataforma"
      },
    ]

  return (
    <div className='flex flex-col'>
      <SectionHeader
        title='CRONG é uma plataforma para divulgar ONGs'
        description='Nosso intuito é fazer com que você ache facilmente instituições ou projetos que ajudam o mundo a se tornar um lugar melhor'
      />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {statistics.map((statistic, index) => {
        return (
          <StatisicCard
            title={statistic.titulo}
            imageSrc={statistic.imagem}
            description={statistic.descricao}
            key={index}
          />
          )
        })}    
      </div>
    </div>
  )
}

export default StatisticSection