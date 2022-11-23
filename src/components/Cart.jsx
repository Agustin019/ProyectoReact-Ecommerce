import { CartContext } from './CartContext'
import { useContext, } from 'react'
import Button from './Button'
const Cart = () => {
  const { obtenerTotal, cartList, deleteItem } = useContext(CartContext)

  //const [total , setTotal] = useState(0)


  return (
    <>
      <main>
       <section>
         <h1 className='mt-20 text-4xl sm:text-7xl font-bold text-center text-indigo-600 uppercase' >Carrito</h1>
         
         <div className='w-full lg:w-3/4 grid grid-cols-[1fr,1fr,1fr] sm:grid-cols-[2fr,1fr,1fr] pl-1 sm:pl-12 
         gap-2  text-lg sm:text-2xl font-bold uppercase border-b-black border-b-4 h-10 mt-8'>
           <p>Producto</p>
           <p className='pl-3 md:pl-10 '>Unidad</p>
           <p>SubTotal</p>
         </div>
         
       </section>
       <section className=' grid grid-cols-1 grid-rows-2 sm:grid-rows-2 lg:grid-cols-[3fr,1fr] gap-x-8 w-full '>
         <div className=''>
           {
             cartList.length > 0
               ?
               cartList.map(item =>
                 <div key={item.idItem} className=' sm:pl-10 grid grid-cols-[1fr,2fr,1fr,2fr,1fr]
                  sm:grid-cols-[2fr,2fr,2fr,2fr,1fr] h-16 sm:h-28  border-b-2 border-gray-300  items-center self-center'>
                   <img className='h-16 w-16 sm:h-28 sm:w-28 sm:pl-2 sm:py-1' src={item.imgItem} alt={item.nameItem} />
                   <h2 className='text-xs sm:text-xl md:text-2xl font-semibold pl-6  items-center self-center'>{item.nameItem}</h2>
                   <p className='text-lg sm:text-xl md:text-2xl font-bold sm:pl-28 '>${item.priceItem} </p>
         
                   <div className='flex gap-2 pl-7 sm:pl-10 md:gap-8 '>
                     <p className='text-lg sm:text-2xl md:text-3xl font-bold'>
                       <span className='text-indigo-600 text-sm sm:text-lg'>
                         X{item.qtyItem}
                       </span>
                       {' '}
                       ${item.priceItem * item.qtyItem}
                     </p>
                   </div>
                     <span  className='text-2xl sm:text-3xl text-red-600 cursor-pointer pl-5'>
                       <ion-icon onClick={() => deleteItem(item.idItem)} name="trash-outline"></ion-icon>
                     </span>
         
                 </div>
         
               )
              
         :
         <h2 className='font-bold text-2xl mt-20 text-center'> Carrito vacio</h2>
         
         }         
         </div>

         <div className='w-full border-2 shadow-2xl bg-white  row-span-2 lg:row-span-1'>
           <p className='font-bold uppercase text-5xl text-center py-3'>total</p>
           <div className='w-3/5 mx-auto'>
             <input type="text"  className='rounded-md' placeholder='Codigo Promocional' />
           </div>
           <p className='font-bold text-4xl py-3 text-center'>${obtenerTotal()}</p>
          <div className='pl-10 py-3'>
            <Button txt='Finalizar Compra'/>
          </div>
         </div>
       </section>
        
      </main>
    </>
  )
}

export default Cart