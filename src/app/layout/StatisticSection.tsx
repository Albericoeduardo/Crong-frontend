import React from 'react'
import StatisicCard from '../components/StatisticCard'
import SectionHeader from '../components/SectionHeader'
import db from '@/data/db'

const StatisticSection = () => {
  const statistics = [
    {
      titulo: `Conexões`,
      imagem: "/tree-svgrepo.svg",
      descricao: `Descubra as ${db.length} ONGs cadastradas na nossa plataforma e veja como elas estão mudando o Brasil.`
    },
    {
      titulo: "Transformação",
      imagem: "/recycling-svgrepo.svg",
      descricao: "Cada ONG tem uma história única e causas importantes. Descubra como você pode fazer parte dessas iniciatívas e ajudar a construir comunidades mais fortes"
    },
    {
      titulo: "Impacto",
      imagem: "/ocean-svgrepo.svg",
      descricao: "Explore ONGs que atuam em educação, meio ambiente, saúde, direitos humanos e veja como sua colaboração pode salvar vidas."
    },
  ]

  return (
    <div className='flex flex-col items-center'>
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