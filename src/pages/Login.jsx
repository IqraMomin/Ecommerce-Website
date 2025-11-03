import React, { useContext, useRef, useState } from 'react'
import authContext from '../store/auth-context';

function Login() {
    const [isLogin,setIsLogin] = useState(true);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const authCtx = useContext(authContext); 

    const formSubmitHandler = async (event)=>{
        event.preventDEfault();
        const userData = {
            email:emailInputRef.current.value,
            password:passwordInputRef.current.value,
            returnSecureToken: true
        }
        if(isLogin){
            try{
                const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAPItEdIRymlHllXc5EWozfIIUZ3q4TTOY",{
                    method:"POST",
                    body:JSON.stringify(userData),
                    headers:{
                        "COntent-Type":"application/json"
                    }
                })
                const data = await response.json();
                if(response.ok){
                    authCtx.login(data.idToken);
                }else{

                }
            }
            catch(err){
                console.log(err);
            }

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
