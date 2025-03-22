import React from 'react'

const Ping = () => {
  return (
    <div className='relative'>
        <div className="absolute -left-4 top-1">
            <span className='flex size-[11px]'>
                <span className=' absolute w-full h-full inline-flex animate-ping bg-primary opacity-75 rounded-full '></span>
                <span className=' relative size-[11px] inline-flex  bg-primary opacity-75 rounded-full '></span>

            </span>
        </div>
    </div>
  )
}

export default Ping