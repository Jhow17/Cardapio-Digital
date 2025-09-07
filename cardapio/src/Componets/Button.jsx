import React from 'react'
import { Link } from "react-router-dom";

const Button = ({nome, id}) => {
  return (
    // indo para 
   <Link className='bg-rose-800  text-white font-semibold rounded-md p-2' to={`/cardapio/${id}`}> {nome} </Link>
  )
}

export default Button