import React from "react";

const CartContext = React.createContext({
    items:[],
    totalQuantity:0,
    lastAction:null,
    resetLastAction:()=>{},
    addToCart:(item)=>{},
    removeItem:(id)=>{}
})

export default CartContext;