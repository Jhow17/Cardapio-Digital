import React from 'react'

const Input = ({placeholder, aoMudar}) => {
  return (
    <>
        <input onChange={(e)=>{
          aoMudar(e.target.value)
        }} className='bg-white text-black border-2 p-2 rounded-lg mb-4' type="text" placeholder={placeholder} />
    </>
  )
}

export default Input