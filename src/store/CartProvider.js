import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultValues = {
    items:[],
    totalQuantity:0
}

const reducer=(state,action) =>{
    if(action.type==='ADD'){
        const existingItemIndex = state.items.findIndex(ele=>ele.id===action.item.id);
        const existingItem = state.items[existingItemIndex];
        if(existingItem){
            return false;
        }
        const updatedQuantity = state.totalQuantity +1;
        const updatedCartItem = state.items.concat(action.item);

        return {
            items:updatedCartItem,
            totalQuantity:updatedQuantity
        }
    }
    if(action.type==='REMOVE'){

    }

    return state;

}

const CartProvider = (props)=>{

    const [item,dispatchItem] = useReducer(reducer,defaultValues);

    const addToCart = (item)=>{
        dispatchItem({type:'ADD',item:item});
    }

    const removeItem=(id)=>{
        dispatchItem({type:'REMOVE',id:id});
    }



    const cartData = {
        items:item.items,
        totalQuantity:item.totalQuantity

    }
    return <CartContext value={cartData}>
        {props.children}
    </CartContext>

}

export default CartProvider