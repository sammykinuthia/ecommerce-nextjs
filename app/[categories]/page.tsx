"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

const page = () => {
  const route= usePathname()
  
  return (
    <div>
      <h1>{route}</h1>
    </div>
  )
}

export default page