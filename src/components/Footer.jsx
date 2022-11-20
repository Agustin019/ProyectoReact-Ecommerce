
import Button from './Button'
import ItemsFooterCont from './ItemsFooterCont'
import SocialIcons from './SocialIcons'
import { Icons } from '../utils/LinksFooter'

const Footer = () => {
    return (
        <footer className='bg-gray-900 text white mt-20'>

            <div className='md:flex md:justify-between sm:px-12 md:items-center  px-4 bg-[#ffffff19] py-7'>
                <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
            md:w-2/5 text-white'>
                    <span className='text-indigo-600'>Free</span> until you 're ready to launch
                </h1>

                <div>
                    <input type="text" placeholder='Enter your Phone' className='text-gray-800 
                sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none'/>
                    <Button
                        href=''
                        txt='send'
                    />
                </div>
            </div>

            <ItemsFooterCont />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  
            gap-10 text-center pt-2 text-gray-400 text-sm pb-8'>
                <span>&copy;2021 FlorBazar. Todos los derechos reservados</span>
                <span>Terminos - Politica de Provacidad</span>
                <SocialIcons Icons={Icons} />
            </div>
        </footer>
    )
}

export default Footer