import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import Styles from "../Styles/navbar.module.css" 
import { FiHeart } from 'react-icons/fi'
import { BsCart } from 'react-icons/bs'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const {isAuth,logout} = useContext(AuthContext)
    const navigate = useNavigate();

    const handlelogin=()=>{
        if(isAuth){
            logout();
            navigate("/")
        }
        else{
            navigate("/login")
        }
    }
  return (
    <div className={Styles.box}>
        <Link className={Styles.link} to="/">Home</Link>
        <Link className={Styles.link} onClick={handlelogin} to='/login'>SignIn</Link>
        <Link className={Styles.link} to="/mens">Footware</Link>
        <Link className={Styles.link} to="/painting">Painting</Link>
        <Link className={Styles.link} to="/wishlist"><FiHeart/></Link>
        <Link className={Styles.link} to="/cart"><BsCart/></Link>
    </div>
  )
}

export default Navbar