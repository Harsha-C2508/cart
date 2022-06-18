import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const AuthContext  = createContext();

export const AuthProvider = ({children}) =>{
const [isAuth,setIsAuth] = useState(false)
const [count,setCount] = useState(0)
const navigate = useNavigate()
const {state} = useLocation();
const Login=()=>{
    setIsAuth(true)
    if(state.from){
        navigate(state.from,{replace:true})
    }
    else{
        navigate("/");
    }
}
const Logout=()=>{
    setIsAuth(false)
}

const wish=()=>{
    setCount(count+1)
}

return(
    <AuthContext.Provider value={{isAuth,Login,Logout,wish}}>{children}</AuthContext.Provider>
)
}