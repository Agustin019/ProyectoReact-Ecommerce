import Button from './Button';
import {ButtonDisabled} from './Button';
import { Add, Remove } from '@mui/icons-material';
import { useState , useEffect} from 'react';


const ItemCount = ({initial = 1, onAdd}) => {


  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(initial);
  }, []);

  const increment = () => {
    if(count < 10){
      setCount(count + 1);
    }

  }

  const decrement = () => {
    if(count > 1){
      setCount(count - 1);
    }
  
  }


  return (
    <div className='flex  items-end gap-x-8'>
      <div className='flex'>
        <button className='p-2 text-3xl border' variant="text " onClick={increment}><Add /></button>
        <div className='text-5xl m-2'>{count}</div>
        <button className='p-2 text-3xl' variant="text" onClick={decrement}><Remove /></button>
      </div>
      {
        count
          ?<Button txt='Add to cart'  onClick={() => onAdd(count)}></Button>
          : <ButtonDisabled txt='Add to cart'/>
      }
    </div>
  )
}

export default ItemCount