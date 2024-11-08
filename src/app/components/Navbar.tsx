import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const links = [
    {link: '/', label: "Home"},
    {link: '/ongs', label: "ONGs"},
    {link: '/more', label: "Saiba mais"},
  ]

  return (
    <nav className='absolute top-0 left-0 flex w-full justify-end items-end px-5 py-5 gap-10'>
      {links.map((link, index) => {
        return (
          <Link
            href={link.link}
            key={index}
            aria-label={link.label}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}

export default Navbar