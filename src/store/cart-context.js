import React from "react";

const CartContext = React.createContext({
    email:"",
    items:[],
    totalQuantity:0,
    lastAction:null,
    resetLastAction:()=>{},
    getEmail:(email)=>{},
    addToCart:(item)=>{},
    removeItem:(id)=>{}
})

export default CartContext;