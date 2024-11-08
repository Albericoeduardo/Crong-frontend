import React from 'react'

const HeroSection = () => {
  const heroSectionImg = '/1440x1024.svg'

  return (
    <div
      className='-z-10 relative h-screen w-full bg-fixed bg-cover bg-center'
      style={{
        backgroundImage: `url(${heroSectionImg})`,
        backgroundAttachment: 'fixed'
      }}
    >
      <div className='h-screen absolute inset-0 bg-slate-800 opacity-60'></div>
    </div>
  )
}

export default HeroSection