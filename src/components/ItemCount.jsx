
import { Add, Remove } from '@mui/icons-material';
import {  useState } from 'react';


const ItemCount = () => {

  const [count, setCount] = useState(0);
  const increment = () => {
    if(count >= 0){
      setCount(count + 1);
}    
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div className='flex  text-5xl'>
      <button className='p-2 text-3xl border' variant="text " onClick={increment}><Add /></button>
      <div className=' m-2'>{count}</div>
      <button className='p-2 text-3xl' variant="text" onClick={decrement}><Remove /></button>
    </div>
  )
}

export default ItemCount