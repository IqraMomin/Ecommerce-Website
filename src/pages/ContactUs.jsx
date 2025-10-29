import React, { useRef } from 'react'
import "./ContactUs.css"

function ContactUs() {
const nameRef = useRef();
const emailRef = useRef();
const phoneRef = useRef();

    const formSubmitHandler = (event)=>{
        event.preventDefault();
        const userDetails={
            name:nameRef.current.value,
            email:emailRef.current.value,
            phone:phoneRef.current.value
        }
        addDataToDatabase(userDetails);
        nameRef.current.value="";
        emailRef.current.value="";
        phoneRef.current.value="";
        

    }

    const addDataToDatabase = async (userDetails)=>{
        try{
           const response =  await fetch("https://e-commerce-website-608d4-default-rtdb.firebaseio.com/contact.json",{
                method:"POST",
                body:JSON.stringify(userDetails),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            console.log(response);
        }catch(err){
            console.log(err);
        }

    }

    return (
        <div className='contact-div'>
        <form onSubmit={formSubmitHandler}>
            <label htmlFor='name'>Name</label>
            <input id='name' type='text' ref={nameRef}/>
            <label htmlFor='email'>E-mail</label>
            <input id='email' type='email' ref={emailRef}/>
            <label htmlFor='phone'>Phone</label>
            <input id='phone' type='number' ref={phoneRef}/>
            <button type='submit'>Submit</button>
            
        </form>
        </div>
    )
}

export default ContactUs
