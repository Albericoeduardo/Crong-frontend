"use client";

import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

const OnsPage = () => {
  const useParams = useSearchParams();
  const ongName = useParams?.get('name')

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h1>OnsPage {ongName}</h1>
    </Suspense>
  )
}

export default OnsPage