import Button from "./Button"
import React,{useState} from 'react'
import CartWidget from "./CartWidget";
const Navbar = () => {

 let Links = [
    {name:'Inicio', link:'/'},
    {name:'Tienda', link:'/'},
    {name:'Nosotros', link:'/'}
 ]

 let[open, setOpen] = useState(false);

  return (
    <>
        <div className="shadow-md w-full fixed top-0  bg-white mb-20">
            <div className="md:flex items-center justify-between  md:py-4 py-6 md:px-10 px-7">
                <div className=" text-xl font-semibold uppercase cursor-pointer flex items-center relative">

                    {/* LOGO */}
                    <span className="text-3xl mr-1 text-indigo-600 ">
                    <ion-icon name="rose-outline"></ion-icon>
                    </span>
                    florbazar
                </div>

                {/* ICON BURGER */}
                <div onClick={()=>setOpen(!open)} 
                className="text-3xl text-indigo-600 absolute 
                right-8 top-7 md:top-5  cursor-pointer md:hidden">
                <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 bg-white absolute md:static  
                md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in 
                ${open ? 'top-20 ':'top-[-490px]'}`}>
                    
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-lg md:my-0 my-7' >
                                <a href={link.link} className='hover:text-gray-500 duration-500 font-semibold'>{link.name}</a>
                            </li>
                        ))
                    }
                    <div className='md:hidden'>
                        <Button>
                            iniciar sesion
                        </Button>
                    </div>
                   
                </ul>
                <ul className="md:flex md:items-center md:pb-0 pb-12  absolute md:static top-7 md:top-5 right-20">
                    <li className="text-2xl cursor-pointer"><ion-icon name="cart-outline"></ion-icon>
                    <CartWidget/>
                    </li>
                    <div className="hidden md:block">
                        <Button> Iniciar sesion</Button>
                    </div>
                </ul>
            </div>
        </div>
    </>

  )
}

export default Navbar