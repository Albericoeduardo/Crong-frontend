"use client";

import React from 'react'
import { useSearchParams } from 'next/navigation'

const OnsPage = () => {
  const useParams = useSearchParams();
  const ongName = useParams?.get('name')

  return (
    <h1>OnsPage {ongName}</h1>
  )
}

export default OnsPage