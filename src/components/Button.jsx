// import {Link} from 'react-router-dom'

const Button = (props) => {
  return (
    <button to={'/'} className="bg-indigo-600 text-white font-[Poppins] uppercase 
    rounded-md py-2 px-6  md:py-3 md:px-8   hover:bg-indigo-700 hover:shadow-2xl duration-300"
    onClick={props.onClick}
    >
        {props.txt}
    </button>
  )
}

export const ButtonDisabled = (props) => {
  return(
    <button  className="bg-gray-400 text-white font-[Poppins] uppercase 
      rounded-md py-2 px-6  md:py-3 md:px-8 " onClick={props.onClick}>
      {props.txt}
    </button>
  )
}


export default Button