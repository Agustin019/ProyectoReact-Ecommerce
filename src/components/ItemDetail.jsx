import ItemCount from './ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom'
import Button from './Button';
import Swal from 'sweetalert2'

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0)
    const { addToCart } = useContext(CartContext)

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(item, qty);
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
                                    ? <ItemCount initial={itemCount} onAdd={onAdd} />
                                    : <Link to='/cart' ><Button txt='ver carrito'/></Link>
                            }


                        </div>
                    </section>
                    : <p>Cargando...</p>
            }

        </>
    )
}

export default ItemDetail