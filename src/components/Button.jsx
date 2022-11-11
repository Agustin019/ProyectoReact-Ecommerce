
const Button = (props) => {
  return (
    <button className="bg-indigo-600 text-white font-[Poppins] uppercase 
    rounded-md py-2 px-6  md:py-3 md:px-8  md:ml-8 hover:bg-indigo-500  duration-500">
        {props.children}
    </button>
  )
}

export default Button