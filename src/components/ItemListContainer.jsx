import { useState ,  useEffect } from 'react'
import Card from './Card'
import  {products}  from '../utils/products'
import customFetch from "../utils/customFetch";
import { useParams } from 'react-router';
// import ItemCount from './ItemCount'

const ItemListContainer = () => {

    const [datos, setDatos] = useState([])
    const { idCategory } = useParams();
    
  useEffect(() => {
        if(idCategory === undefined){
            customFetch(600, products)
                .then(result => setDatos(result))
                .catch(err => console.log(err))
        }else{
            customFetch(600, products.filter(item => item.categoryId == idCategory))
                .then(result => setDatos(result))
                .catch(err => console.log(err))
        }
        }, [idCategory]);


    return (
        <>
            {
                datos.map(product =>
                    <Card
                    key={product.id}
                    id={product.id}
                    img={product.image}
                    name={product.name}
                    desc ={product.description}
                    price={product.price} />                  
                )
            }   
           
        </>
    )
}

export default ItemListContainer