import React from 'react'
import Contacto from './Contacto'
import FAQ from '../faq/FAQ'
import './contacto.css'

export default function 
() {
  return (
    <div>
        <Contacto />
        <div className='contacto-page-faq'>
            <FAQ />
        </div>
    </div>
  )
}
