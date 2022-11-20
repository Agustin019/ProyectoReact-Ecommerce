import { Link } from "react-router-dom";
import Button from "./Button";


const Card = ({id,img, name, desc, price }) => {
  return (
    <>
            {/*  Card */}

            <div className=' flex  flex-col justify-around w-52 sm:w-60 p-2 bg-white rounded-xl transform transition-all 
              hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl'>

                <img className='h-60 w-full object-cover rounded-xl' src={img} alt="" />

                <div className='p-2'>

                    {/* Heading */}
                    <h2 className='font-bold text-lg leading-5'>{name}</h2>

                    {/* Description */}
                    <p className='text-sm text-gray-600'>{desc} </p>
                    <p className='font-bold text-xl'>{`$${price}`}</p>
                </div>

                    {/* CTA */}
                <div className='m-2'>
                  <Link to={`/item/${id}`}>  
                    <Button
                      txt='Ver detalles'
                    />
                  </Link>
                  
                </div>

            </div>
    </>
  )
}

export default Card