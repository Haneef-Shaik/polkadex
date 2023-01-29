import React, { useState } from 'react'

export default function Card1() {
  const [selected,setSelected] = useState(1);
  return (
    <div className="card1" onClick={(e)=>{e.stopPropagation()}} >
            <h2 className="title">Choose token</h2>
            <div className="tokens">
              <div className="token" onClick={()=>{ setSelected(1) }} style={{ borderColor:selected ==1 ? "#1c1c26" : "#828282" }}>
                <div className="imgdiv center">
                  <img
                    style={{ height:"80%" }}
                    src={require('../assets/images/ETH.png')} alt="ETH "
                  />
                </div>
                <div className="details">
                  <span className="name" >Ethereum</span> <br />
                  <span className="code" > ETH </span>
                </div>
              </div>
              <div className="token" onClick={()=>{ setSelected(2) }} style={{ borderColor:selected ==2 ? "#1c1c26" : "#828282" }}>
                <div className="imgdiv center">
                  <img
                    style={{ width: "80%" }}
                    src={require('../assets/images/ADA.png')} alt="ADA" 
/>
                </div>
                <div className="details">
                  <span className="name" >Cardano</span> <br />
                  <span className="code" > ADA </span>
                </div>
              </div>
            </div>
          </div>  
  )
}
