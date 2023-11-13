import Navbar from '@/components/Navbar'
import React from 'react'
import Herosection from '../components/Herosection'
import Tips from '@/components/Tips'

export default function page() {
  return (
    <div className='container '>
      <Navbar/>
      <Herosection/>
      <Tips/>
    </div>
  )
}
