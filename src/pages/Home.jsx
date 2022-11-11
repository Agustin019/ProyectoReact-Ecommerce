import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../components/Navbar"
import ItemListContainer from "../components/ItemListContainer"
import ProductContainer from "../components/ProductContainer"
import Inicio from "../components/Inicio"
import ItemDetailContainer from "../components/ItemDetailContainer"


const Home = () => {
  return (
    <>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<><Inicio/> <ProductContainer> <ItemListContainer /> </ProductContainer> </>  } />
          <Route path='/category/:idCategory' element={<ProductContainer> <ItemListContainer /> </ProductContainer>} />
           <Route path='/item/:idItem' element={<ItemDetailContainer />} /> 
        </Routes>

      </BrowserRouter>
    </>

  )
}

export default Home