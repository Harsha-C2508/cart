import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Wishlist = () => {
  const {count} = useContext(AuthContext)
  return (
    <div>Wishlist:{count}</div>
  )
}

export default Wishlist