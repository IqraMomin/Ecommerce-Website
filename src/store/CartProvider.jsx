import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultValues = {
    items:[],
    totalQuantity:0,
    lastAction:null
}

const reducer=(state,action) =>{
    if(action.type==='ADD'){
        const existingItemIndex = state.items.findIndex(ele=>ele.id===action.item.id);
        const existingItem = state.items[existingItemIndex];
        if(existingItem){
            console.log("Inside existing",existingItemIndex);
            return {
                ...state,lastAction:"EXISTS"
            }
        }
        const updatedQuantity = state.totalQuantity +1;
        const updatedCartItem = state.items.concat(action.item);
        console.log(updatedQuantity);
        

        return {
            items:updatedCartItem,
            totalQuantity:updatedQuantity,
            lastAction:"ADDED"
        }
    }
    if(action.type==="RESET"){
        return {
            ...state,
            lastAction:null
        }
    }
    if(action.type==='REMOVE'){

    }

    return state;

}

const CartProvider = (props)=>{

    const [item,dispatchItem] = useReducer(reducer,defaultValues);

    const addToCartHandler = (item)=>{
        dispatchItem({type:'ADD',item:item});
        
    }

    const removeItemHandler=(id)=>{
        dispatchItem({type:'REMOVE',id:id});
    }

    const resetLastAction = ()=>{
        dispatchItem({type:"RESET"});
    }



    const cartData = {
        items:item.items,
        totalQuantity:item.totalQuantity,
        lastAction:item.lastAction,
        addToCart:addToCartHandler,
        removeItem:removeItemHandler,
        resetLastAction

    }
    return <CartContext.Provider value={cartData}>
        {props.children}
    </CartContext.Provider>

}

export default CartProvider