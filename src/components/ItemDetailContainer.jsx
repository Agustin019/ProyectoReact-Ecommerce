import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { firestoreFetchOne } from "../utils/firestoreFetch";


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);

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