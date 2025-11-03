import React, { useReducer, useState,useEffect } from "react";
import CartContext from "./cart-context";
import axios from "axios";

const defaultValues = {
    items:[],
    totalQuantity:0,
    lastAction:null
}
const api_crud = "https://crudcrud.com/api/55d24266539c4906b413fe85cc9a7bec";
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
    if(action.type==="SET_CART"){
        return {
            ...state,
            items:action.item,
            totalQuantity:action.item.length,
            lastAction:null
        }
    }

    return state;

}

const CartProvider = (props)=>{

    const [item,dispatchItem] = useReducer(reducer,defaultValues);
    const [email,setEmail] = useState("");

    useEffect(()=>{
        if(!email) return;
        const fetchCart =async()=>{
            try{
               const response = await axios.get(`${api_crud}/cart_${email}`);
               dispatchItem({type:"SET_CART",item:response.data})
            }catch(err){
                console.log(err);
            }
        }
        fetchCart();
    },[email]);

    const addToCartHandler = (item)=>{
        dispatchItem({type:'ADD',item:item});
        if(email){
            addToDatabase(email,item);
        }
        
        
    }

    const removeItemHandler=(id)=>{
        dispatchItem({type:'REMOVE',id:id});
    }

    const resetLastAction = ()=>{
        dispatchItem({type:"RESET"});
    }
    const getEmailHandler = (email)=>{
        setEmail(email);
        
    }

    function addToDatabase(key,item){
        try{
            axios.post(`${api_crud}/cart_${key}`,item);
        }
        catch(err){
            console.log(err);
        }
        
    }



    const cartData = {
        email:email,
        items:item.items,
        totalQuantity:item.totalQuantity,
        lastAction:item.lastAction,
        getEmail:getEmailHandler,
        addToCart:addToCartHandler,
        removeItem:removeItemHandler,
        resetLastAction

    }
    return <CartContext.Provider value={cartData}>
        {props.children}
    </CartContext.Provider>

}

export default CartProvider