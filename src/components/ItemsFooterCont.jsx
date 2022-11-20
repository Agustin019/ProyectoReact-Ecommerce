import ItemsFooter from "./ItemsFooter"
import {PRODUCTS, RESOURCES, COMPANY,SUPPORT } from "../utils/LinksFooter"


const ItemsFooterCont = () => {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-3  lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
        <ItemsFooter Links={PRODUCTS} title="PRODUCTS"/>
        <ItemsFooter Links={RESOURCES} title="RESOURCES"/>
        <ItemsFooter Links={COMPANY} title="COMPANY"/>
        <ItemsFooter Links={SUPPORT} title="SUPPORT"/>
    </div>
  )
}

export default ItemsFooterCont