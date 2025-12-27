import React from 'react'
import {CONTACT} from "../../constants"
import { useTheme } from '../../context/ThemeContext'
const Contact = () => {
  const { currentGradient } = useTheme();
  return (
    <div className={`border-b border-neutral-900 pb-20 ${currentGradient}`}> 
        <h1 className='my-10 text-center text-4xl'>Get in Touch</h1>
        <div className='text-center tarcking-tighter'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <p className='my-4'>{CONTACT.email}</p>
        </div>
    </div>
  )
}

export default Contact