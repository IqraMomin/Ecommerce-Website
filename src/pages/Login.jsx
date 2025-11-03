import React, { useContext, useRef, useState } from 'react'
import { useHistory } from "react-router-dom"
import AuthContext from '../store/auth-context';
import CartContext from '../store/cart-context';

function Login() {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const authCtx = useContext(AuthContext);
    const history = useHistory();
    const cartCtx = useContext(CartContext);



    const formSubmitHandler = async (event) => {
        event.preventDefault();
        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;
        const userData = {
            email,
            password,
            returnSecureToken: true
        }

        try {
            const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAPItEdIRymlHllXc5EWozfIIUZ3q4TTOY", {
                method: "POST",
                body: JSON.stringify(userData),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json();
            if (response.ok) {
                const cleanEmail = email.replace(/[@.]/g, "");
                cartCtx.getEmail(cleanEmail);
                authCtx.login(data.idToken);
                history.replace("/")
            } else {
                let errorMessage = "Authentication Failed";
                if (data && data.error && data.error.message) {
                    errorMessage = data.error.message;
                }
                console.log(errorMessage);

            }
        }
        catch (err) {
            alert(err);
        }
    }
    return (
        <form onSubmit={formSubmitHandler}>
            <label htmlFor='email'>Email</label>
            <input id='email' type='email' ref={emailInputRef} />
            <label htmlFor='password'>Password</label>
            <input id='password' type='password' ref={passwordInputRef} />
            <button>Login</button>

        </form>
    )
}

export default Login
