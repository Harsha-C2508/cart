import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import Styles from '../Styles/mens.module.css'
import { FiHeart } from 'react-icons/fi'

const Mens = () => {
    const [mensData,setMensData] = useState([])
    const {wish} = useContext(AuthContext)
    useEffect(()=>{
        const fetchProduct=async()=>{
            fetch("https://mens-e1.herokuapp.com/mensData")
        .then((r)=>r.json())
        .then((d)=>{
            setMensData(d)
         })
        }
        fetchProduct();
    },[]);
  return (
    <div>
        <div className={Styles.gridbox}>
            {mensData.map((p)=>(
                <div key={p.id}  className={Styles.box}>
                    <img src={p.image_url} alt=""/>
                    <h1>{p.name}</h1>
                    <h4>Amount:{p.price}</h4>
                    <div>
                    <FiHeart onClick={wish}/>
                    </div>
                </div>  
            ))}
        </div>
    </div>
  )
}

export default Mens