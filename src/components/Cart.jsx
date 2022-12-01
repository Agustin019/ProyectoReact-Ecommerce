import { CartContext } from './CartContext'
import { useContext, } from 'react'
import Button from './Button'
import { serverTimestamp ,doc, setDoc, collection, updateDoc, increment} from 'firebase/firestore'
import db from '../utils/FirebaseConfig'
import Swal from 'sweetalert2'


const Cart = () => {
  const { obtenerTotal, cartList, deleteItem , clear} = useContext(CartContext)

  //const [total , setTotal] = useState(0)
  const createOrder = () => {
    let order = {
      buyer:{
        name:'Agustin Narciande',
        email:'correo@correo.com',
        phone:'123456789'
      },
      date: serverTimestamp(),
      items: cartList.map(item =>({
        id: item.idItem,
        name: item.nameItem,
        price: item.priceItem,
        qty: item.qtyItem

      })),
      total: obtenerTotal()
    }
    console.log(order)

    const createOrderInFireStore = async () =>{
      const newOrderRef = doc(collection(db, 'orders'))
       await setDoc(newOrderRef, order);
       return newOrderRef
    } 
    createOrderInFireStore()
      .then(response =>  {
        Swal.fire({
        text:`¡Muchas Gracias por su compra! Order Id ${response.id}`,
        icon:'success'
    })
      cartList.forEach(async (item) => {
        const itemRef = doc(db, "products", item.idItem)
        await updateDoc(itemRef, ({
          stock : increment(- item.qtyItem)
        }))
      })
    // Vaciar carrito despues de finalizar la compra
    clear()
  })
      .catch(err => console.log(err))
  }

  return (
    <>
      <main>
       <section>
         <h1 className='mt-20 text-4xl sm:text-7xl font-bold text-center text-indigo-600 uppercase' >Carrito</h1>
         {
          cartList.length === 0
          ?<h2 className='font-bold text-2xl mt-20 text-center w-full'>¡El carrito esta vacio, comienze a comprar!</h2>

          : <div className='w-full lg:w-3/4 grid grid-cols-[1fr,1fr,1fr] sm:grid-cols-[2fr,1fr,1fr] pl-1 sm:pl-12 
          gap-2  text-lg sm:text-2xl font-bold uppercase border-b-black border-b-4 h-10 mt-8'>
            <p>Producto</p>
            <p className='pl-3 md:pl-10 '>Unidad</p>
            <p>SubTotal</p>
          </div>
         }
        
         
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
              
         :''
         
         
         }         
         </div>
         {
          cartList.length === 0
          ? ''
          : <div className='w-full border-2 shadow-2xl bg-white  row-span-2 lg:row-span-1'>
          <p className='font-bold uppercase text-5xl text-center py-3'>total</p>
          <div className='w-3/5 mx-auto'>
            <input type="text"  className='rounded-md' placeholder='Codigo Promocional' />
          </div>
          <p className='font-bold text-4xl py-3 text-center'>${obtenerTotal()}</p>
         <div className='pl-20 py-3 '>
           <Button onClick={createOrder} txt='Finalizar Compra'/>
         </div>
        </div>
         }
        
       </section>
        
      </main>
    </>
  )
}

export default Cart