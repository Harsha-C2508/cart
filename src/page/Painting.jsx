import React, { useEffect, useState } from 'react'
import Styles from '../Styles/paint.module.css'

const Painting = () => {
  const [paints,setPaints] = useState([])
  useEffect(()=>{
      const fetchProduct=async()=>{
          fetch("https://painting-e2.herokuapp.com/paints")
      .then((r)=>r.json())
      .then((d)=>{
          setPaints(d)
       })
      }
      fetchProduct();
  },[]);
return (
  <div>
      <div className={Styles.gridbox}>
          {paints.map((p)=>(
              <div key={p.id} className={Styles.box} >
                  <img className={Styles.size} src={p.image_url} alt=""/>
                    <h1>{p.name}</h1>
                    <h4>Amount:{p.price}</h4>
              </div>  
          ))}
      </div>
  </div>
)
}

export default Painting