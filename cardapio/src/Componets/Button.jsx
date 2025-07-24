import React from 'react'
import { Link } from "react-router-dom";

const Button = ({nome, id}) => {
  return (
    <button className='bg-rose-800  text-white font-semibold rounded-md p-2'> <Link to={`/cardapio/${id}`}> {nome} </Link></button>
  )
}

export default Button