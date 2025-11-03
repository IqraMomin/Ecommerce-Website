import React,{useState} from 'react'

const AuthContext = React.createContext({
    token:"",
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}
})



export const AuthProvider = (props)=>{

    const [token,setToken] = useState(localStorage.getItem("token"));

    const isLoggedIn = !!token;

    const loginHandler = (token)=>{
        setToken(token);
        localStorage.setItem("token",token);
    }

    const logoutHanlder = ()=>{

    }

    const contextValue = {
        token:token,
        isLoggedIn:isLoggedIn,
        login:loginHandler,
        logout:logoutHanlder
    }
    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>

}

export default AuthContext
