import { useContext } from "react";

const CartContext = React.createContext({
    items:[],
    totalQuantity:0,
    addToCart:(item)=>{},
    removeItem:(id)=>{}
})

export default CartContext;