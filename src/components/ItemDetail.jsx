import ItemCount from './ItemCount'
import Button from './Button'
const ItemDetail = ({ item }) => {
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
                            <p className='font-bold text-4xl  py-5' >{item.price}</p>
                            <div className=' flex '>
                                <ItemCount /*initial={1}*//>
                                <Button>Add to cart</Button>
                            </div>
                        </div>
                    </section>
                    : <p>Cargando...</p>
            }

        </>
    )
}

export default ItemDetail