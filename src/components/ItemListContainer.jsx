import { useState, useEffect } from 'react'
import Card from './Card'
import { useParams } from 'react-router';
import  {FireStoreFetch}  from '../utils/FireStoreFetch';


const ItemListContainer = () => {

    const [datos, setDatos] = useState([])
    const { idCategory } = useParams();

    //componentDidUpdate
    useEffect(() => {
        FireStoreFetch(idCategory)
            .then(result => setDatos(result))
            .catch(err => console.log(err));
    }, [idCategory]);

    //componentWillUnmount
    useEffect(()=>{
        return(()=>{
            setDatos([])
        } )  
    },[])

    return (
        <>
            {
                datos.map(product =>
                    <Card
                        key={product.id}
                        id={product.id}
                        img={product.image}
                        name={product.name}
                        desc={product.description}
                        price={product.price}
                        stock={product.stock} />
                )
            }
         
        </>
    )
}

export default ItemListContainer