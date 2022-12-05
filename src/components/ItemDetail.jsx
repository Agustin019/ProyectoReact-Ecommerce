import ItemCount from './ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom'
import {ButtonSuccess} from './Button';
import Swal from 'sweetalert2'

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0)
    const { addToCart } = useContext(CartContext)
  

    // Funcion que recibe el parametro "qty" que es el estado count pasado por parametro desde el componente ItemCount
    const onAdd = (qty) => {
        Swal.fire({
            text:`Sellecionaste ${qty} items`,
            icon:'success'
        })
        setItemCount(qty);
        addToCart(item, qty);
    }
    

    return (
        <>
            {
                item && item.image
                    ?

                    <section className='w-5/6 m-auto flex flex-col md:flex-row  space-between'>
                        <div className='md:w-1/2 pt-28 m-auto'>
                            <img className='h-96' src={item.image} alt="" />
                        </div>
                        <div className='flex flex-col md:w-1/2  md:pt-40 m-auto'>
                            <p className='font-bold text-5xl py-5'>{item.name}</p>
                            <p className='font-semibold text-gray-600 text-lg  py-5'>{item.description}</p>
                            <p className='font-bold text-4xl  py-5' >${item.price}</p>


                            {
                                itemCount === 0
                                    ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                                    : <Link to='/cart' ><ButtonSuccess txt='ver carrito'/></Link>
                            }


                        </div>
                    </section>
                    : <p>Cargando...</p>
            }

        </>
    )
}

export default ItemDetail