import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../components/Navbar"
import ItemListContainer from "../components/ItemListContainer"
import ProductContainer from "../components/ProductContainer"
import Inicio from "../components/Inicio"
import ItemDetailContainer from "../components/ItemDetailContainer"
import Footer from "../components/Footer"
import Cart from "../components/Cart"
import  CartContextProvider  from "../components/CartContext"

const Home = () => {
  return (
    <>
      <CartContextProvider value={ [{ name:'Coca cola', price:120 } ,{ name:'pepsi', price:100}] }>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path='/' element={<><Inicio /> <ProductContainer> <ItemListContainer /> </ProductContainer> </>} />
              <Route path='/category/:idCategory' element={<ProductContainer> <ItemListContainer /> </ProductContainer>} />
              <Route path='/item/:idItem' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </>

  )
}

export default Home