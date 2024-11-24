"use client";

import React from 'react'
import RecentsCard from '../components/RecentsCard'
import SectionHeader from '../components/SectionHeader'
import db from '@/data/db'

const RecentsSection = () => {
  const recentsOngs = db.slice(-6);

  return (
    <div>
      <SectionHeader
        title='ONGs Recém adicionadas'
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {recentsOngs.map((recent, index) => {
          return (
            <RecentsCard
              href={`/ongstest?name=${recent.Nome}`}
              imageSrc={recent.imagem}
              title={recent.Nome}
              description={recent.Descricao}
              key={index}
              handleRecentOngClick={() => console.log(recent.Nome)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default RecentsSection