import { CartContext } from './CartContext'
import { useContext } from 'react'
const Cart = () => {
  const test = useContext(CartContext)

  return (
    <>
      <h1 className='mt-20 text-4xl sm:text-7xl font-bold text-center text-indigo-600 uppercase' >Carrito</h1>

      <div className='w-full grid grid-cols-[2fr,1fr,1fr] sm:grid-cols-[4fr,1fr,1fr] pl-2 sm:pl-12 gap-5 text-xl sm:text-2xl 
          font-bold uppercase border-b-black border-b-4 h-10 mt-8'>
        <p>Producto</p>
        <p>Unidad</p>
        <p>Total</p>
      </div>

      <div className=' flex flex-col gap-3 w-full mt-'>
        {
          test.cartList.length > 0
            ?
            test.cartList.map(item =>
              <div key={item.idItem} className=' sm:pl-10 grid grid-cols-[1fr,2fr,1fr,2fr]
               sm:grid-cols-[1fr,1fr,1fr,1fr] h-16 sm:h-28  border-b-2 border-gray-500 md:pt-6'>
                <img className='h-16 w-16 sm:h-28 sm:w-28 pl-2 md:pb-4' src={item.imgItem} alt={item.nameItem} />
                <h2 className='text-lg sm:text-xl md:text-2xl font-semibold pl-3'>{item.nameItem}</h2>
                <p className='text-lg sm:text-xl md:text-2xl font-bold sm:pl-28 md:pl-60 '>${item.priceItem} </p>

                <div className='flex gap-2 pl-4 sm:pl-10 md:pl-24 md:gap-8'>
                    <p className='text-lg sm:text-2xl md:text-3xl font-bold'>
                       <span className='text-indigo-600 text-sm sm:text-lg'>
                          X{item.qtyItem} 
                        </span> 
                        {' '} 
                        ${item.priceItem * item.qtyItem}
                    </p>
                    <span onClick={() => test.deleteItem(item.idItem)} className='text-2xl sm:text-3xl text-red-600 cursor-pointer'>
                      <ion-icon name="trash-outline"></ion-icon>
                    </span>
                </div>
              </div>
              )
            :
            <h2 className='font-bold text-2xl mt-20 text-center'> Carrito vacio</h2>

        }
      </div>

    </>
  )
}

export default Cart