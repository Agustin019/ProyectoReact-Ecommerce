import Button from "./Button"

const Inicio = () => {
  return (
    <main className="grid grid-cols-1  sm:grid-rows-1 grid-rows-2
     w-5/6   mx-auto  gap-6">

      <section className='grid grid-cols-1 sm:grid-cols-2 mx-auto sm:grid-rows-1 grid-rows-2 w-full gap-6'>
        <article className="flex flex-col  items-start  md:pl-24 pt-18">
          <p className=' text-gray-400  py-10 pt-28 leading-6'>
            <span className="md:text-5xl text-4xl text-center leading-10
             text-gray-700 font-bold uppercase">Bienvenidos a florbazar
            </span>
            <br />
            ¡Bienvenidos a nuestra Pagina Web, donde no vas a encontrar mejores precios
            que en nuestro sitio! contamos con articulos de
            <span className="text-indigo-600"> bazar, termos y mates</span>!
          </p>

          <Button
            href=''
            txt='ver productos'
          />

        </article>

        <article className="sm:mt-24 mx-auto  w-full h-5/6 ">
          <img className=" sm:w-5/6 sm:h-5/6 rounded-lg " src="../../img/Termo Stanley Charly 1200cc.jpg" alt="" />
        </article>
      </section>

      <section className="grid grid-cols-[1fr,2fr] grid-rows-2 lg:grid-rows-1 
                          md:grid-cols-[1fr,2fr]  
                          lg:grid-cols-[1fr,3fr,2fr] md:w-5/6 mx-auto  gap-x-8">

        <article className="h-5/6 " >
          <div className="h-full w-full bg-cover rounded-lg bg-[url(../../img/mate_forrado_tipo_pampa.jpg)]">
            <div className="w-full h-full rounded-lg 
            bg-indigo-600 opacity-50"></div>
          </div>
        </article>

        <article className="h-5/6 ">
          <div className="h-full w-full ">
            <img className="w-full h-full object-cover rounded-xl" src="../../img/setmatero-cuore.jpg" alt="" />
          </div>
        </article>
        
        <article className="row-span-2 col-span-2 lg:col-span-1 lg:row-span-1 lg:pt-14">
          <p className="text-gray-700 font-bold text-2xl">
            ¡Set materos hermosos y de muy buena Calidad!
          </p>
          <p className="text-gray-500 font-semibold text-lg">
            Set materos en colores variados, de alta calidad y a un super precio.
          </p>

          <div className="mt-6">
            <Button
              href=''
              txt='Ver Set Materos'
            />
          </div>
        </article>
      </section>
    </main>
  )
}

export default Inicio