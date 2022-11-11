import React from 'react'

const ProductContainer = (props) => {
  return (
    <section className='w-full'>
        <h1 className='text-3xl text-center font-bold'>Nuestros productos</h1>
        {/* Div donde van las cards */}
        <div className='m-auto mt-28  w-full md:w-4/5 grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-6' >
            {props.children}
        </div>
    </section>
  )
}

export default ProductContainer