import React from 'react'
import { useContext } from 'react'
import { CartContext } from './CartContext'

const CartWidget = (props) => {

  const { badgeNumber , cartList } = useContext(CartContext)


  return (
<>
    <span className={`absolute bottom-16 left-6 rounded-full
    md:left-auto md:right-60 md:bottom-10 
     bg-red-700 text-white text-sm py-.5 px-1 ${props.display}`}>
      { cartList.length > 0
      ?badgeNumber()
      :''
      }
  </span>
  </>

  )
}

export default CartWidget