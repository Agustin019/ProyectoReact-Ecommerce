import { createContext } from "react";
import { useState } from "react";
export const CartContext = createContext();

const CartContextProvider = (props) => {

    const [cartList, setCartList] = useState([])
    
    const obtenerTotal = () => {
        // Variable donde se va a ir guardando y modificando el precio final
        let acc = 0;

        cartList.map(item => {
            acc += (item.priceItem * item.qtyItem)
        })
        return acc;
    }

    const addToCart = (item, qty) => {
        // preguntar si item existe ya en el array
        let found = cartList.find(product => product.idItem === item.id);
        if (found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.image,
                    nameItem: item.name,
                    priceItem: item.price,
                    qtyItem: qty
                }
            ])
        } else {
            //al encontrarlo, entonces aumentamos el qty de ese producto
            found.qtyItem += qty
            setCartList([
                ...cartList
            ]);
        }


    }

    const clear = () => {
        setCartList([])
    }

    const deleteItem = id => {
        let result = cartList.filter(item => item.idItem != id)
        setCartList(result)
    }

    

    const badgeNumber = () => {
      let acc = 0;
      cartList.forEach((item) => {
        acc += item.qtyItem
      })
      return acc
    }

    return (
        <CartContext.Provider value={{ cartList, addToCart, clear, deleteItem, obtenerTotal, badgeNumber }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider