import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaNodeJs } from 'react-icons/fa'
import { TbBrandJavascript } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'


const Tec = () => {
  return (
    <div className='border-b bg-neutral-800 pb-24'>
       <h1 className='my-20 text-center text-4xl'> Technologies</h1>
       <div className='flex flex-wrap items-center justify-center gap-4 '>
            <div className='rounded-2xl border-4 bg-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400' />
            </div>
            <div className='rounded-2xl border-4 bg-neutral-800 p-4'>
                <TbBrandJavascript className='text-7xl text-yellow-200' />
            </div>
            <div className='rounded-2xl border-4 bg-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-green-400' />
            </div>
            <div className='rounded-2xl border-4 bg-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-yellow-400' />
            </div>
            
       </div>
    </div>
  )
}

export default Tec