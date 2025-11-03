import React, { useRef, useState } from 'react'

function Login() {
    const [isLogin,setIsLogin] = useState(true);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const formSubmitHandler = async (event)=>{
        event.preventDEfault();
        const userData = {
            email:emailInputRef.current.value,
            password:passwordInputRef.current.value,
            returnSecureToken: true
        }
        if(isLogin){

        }
    }
    return (
        <form onSubmit={formSubmitHandler}>
            <label htmlFor='email'>Email</label>
            <input id='email' type='email' ref={emailInputRef}/>
            <label htmlFor='password'>Password</label>
            <input id='password' type='password' ref={passwordInputRef}/>
            <button>Login</button>
            
        </form>
    )
}

export default Login
