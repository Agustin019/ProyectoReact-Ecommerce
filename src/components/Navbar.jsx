import Button from "./Button"
import React, { useState } from 'react'
import { Link, BrowserRouter } from "react-router-dom"
const Navbar = () => {


    let [open, setOpen] = useState(false);

    return (
        <>
            <div className="shadow-md w-full fixed top-0  bg-white mb-20 z-10">
                <div className="md:flex items-center justify-between  md:py-4 py-6 md:px-10 px-7">
                    <div className=" text-xl font-semibold uppercase cursor-pointer flex items-center relative">

                        {/* LOGO */}
                        <span className="text-3xl mr-1 text-indigo-600 ">
                            <ion-icon name="rose-outline"></ion-icon>
                        </span>
                        florbazar
                    </div>

                    {/* ICON BURGER */}
                    <div onClick={() => setOpen(!open)}
                        className="text-3xl text-indigo-600 absolute 
                right-8 top-7 md:top-5  cursor-pointer md:hidden">
                        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    </div>

                    {/* Links */}

                    <ul className={`md:flex md:items-center md:pb-0 pb-12 bg-white absolute md:static  
                    md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in 
                    ${open ? 'top-20 ' : 'top-[-490px]'}`}>



                        <li className='md:ml-8 text-lg md:my-0 my-7' >
                            {/* <a className='hover:text-gray-500 duration-500 font-semibold'>AAA</a> */}
                            <Link  to='/' className='hover:text-gray-500 duration-500 font-semibold' >Inicio</Link>
                        </li>
                        <li className='md:ml-8 text-lg md:my-0 my-7' >
                            <Link to='/category/1'  className='hover:text-gray-500 duration-500 font-semibold'>Mates</Link>
                        </li>
                        <li className='md:ml-8 text-lg md:my-0 my-7' >
                            <Link to='/category/2'  className='hover:text-gray-500 duration-500 font-semibold'>Termos</Link>
                        </li>
                        <li className='md:ml-8 text-lg md:my-0 my-7' >
                            <Link to='/category/3'  className='hover:text-gray-500 duration-500 font-semibold'>Set Materos</Link>
                        </li>




                        {/* 
                        <Link to='/category/1' style={{ color: "white" }}>Vinos</Link>
                    <Link to='/category/5' style={{ textDecoration: "none", color: "white" }}>LicoresLink</Link> */}


                        <div className='md:hidden'>
                            <Button>
                                iniciar sesion
                            </Button>
                        </div>

                    </ul>
                    <ul className="md:flex md:items-center md:pb-0 pb-12  absolute md:static top-7 md:top-5 right-20">
                        <li className="text-2xl cursor-pointer"><ion-icon name="cart-outline"></ion-icon></li>
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