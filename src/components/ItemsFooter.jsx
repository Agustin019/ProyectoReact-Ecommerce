import {Link} from 'react-router-dom'
const ItemsFooter = ({Links, title}) => {
  return (
    <ul>
       <h1 className="mb-1 font-semibold text-white">{title}</h1>

       {
        Links.map(link => (
            <li key={link.name}>
                <Link className='text-gray-400 hover:text-violet-600 duration-300 text-sm 
                cursor-pointer leading-7' to={link.link}>{link.name}</Link>

            </li>
        ))
        // console.log(Links.link)
       }
    </ul>
  )
}

export default ItemsFooter