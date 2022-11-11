import { useEffect, useState } from "react";
import { useParams } from "react-router";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
import  {products}  from '../utils/products'


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        customFetch(2000, products.find(item => item.id === parseInt(idItem)) )
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [idItem]);

    return (
        <ItemDetail 
            item={dato} 
            key={dato.id} 
            id ={ dato.id }  
            img ={ dato.img } 
            title = {dato.title} 
            description = {dato.descrip} 
            price= {dato.price} />
    );


}

export default ItemDetailContainer