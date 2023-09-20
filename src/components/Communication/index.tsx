import React, { ReactNode } from 'react'

const Communication = ({children,type}:{children :ReactNode ,type :string}) => {
  return (
    <div className='flex flex-col justify-center items-center mt-8 '>
    <span className="bg-[#E8EDFF] w-16 h-16 rounded-full flex items-center justify-center">
    {children}
    </span>
    <span>{type}</span>
    </div>
  )
}

export default Communication