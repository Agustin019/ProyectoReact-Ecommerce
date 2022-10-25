import Button from "./Button"

const Inicio = () => {
  return (
    <div className="flex mt-20 static">
      <div className='w-full h-screen  text-center mt-20 '>
        <p className=' text-gray-400 py-10 '>
          <span className="text-indigo-600  md:text-7xl text-4xl"><ion-icon name="rose-outline"></ion-icon></span>
          <span className="md:text-7xl text-4xl text-gray-800 font-bold uppercase">FlorBazar</span>
          <br />
          ¡Encontra al mejor precio de  articulos  de <br />
          <span className="text-indigo-600">bazar, termos y mates</span>!
        </p>
        <Button
          children='Ver Tienda'
        />
      </div>
      {/* <div className="w-1/2">
        <img src="../../img/mate_5.png" alt="" />
      </div> */}
    </div>
  )
}

export default Inicio