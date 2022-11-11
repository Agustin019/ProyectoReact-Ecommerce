import { Link } from "react-router-dom";


const Card = ({id,img, name, desc, price }) => {
  return (
    <>
            {/*  Card */}

            <div className=' w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl'>

                <img className='h-60 w-full object-cover rounded-xl' src={img} alt="" />

                <div className='p-2'>

                    {/* Heading */}
                    <h2 className='font-bold text-lg '>{name}</h2>

                    {/* Description */}
                    <p className='text-sm text-gray-600'>{desc} </p>
                    <p className='font-bold text-xl'>{`$${price}`}</p>
                </div>

                    {/* CTA */}
                <div className='m-2'>
                  <Link to={`/item/${id}`}>  
                    <input type="button" value="Comprar" className='text-white bg-indigo-600 px-3 py-1 rounded-md cursor-pointer ' />
                  </Link>
                  
                </div>

            </div>
    </>
  )
}

export default Card