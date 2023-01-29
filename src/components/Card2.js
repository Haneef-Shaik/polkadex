import React, { useEffect, useState } from 'react'

export default function Card2() {
  const [selected,setSelected] = useState(1); 
  useEffect(()=>{ console.log(selected) },[selected])
  return (
    <div className="card2" onClick={(e)=>{e.stopPropagation()}} >
            <h2 className="title">Select chain</h2>
            <div className="options">
              <div className="option1 option" onClick={()=>{setSelected(1)}} style={{cursor:"pointer"}}>
                <div className="text" > <div  className="dot" style={{background: selected == 1 ?  "#e6007a" : "rgba(139, 161, 190, 0.2)"  }} ></div> Ethereum Mainnet</div>
                <div className="selectOption center" >Select</div>
              </div>
              <div className="option2 option" onClick={()=>{setSelected(2)}} style={{cursor:"pointer"}}>
                <div className="text" > <div  className="dot" style={{background: selected == 2 ?  "#e6007a" : "rgba(139, 161, 190, 0.2)"  }}></div> Ropsten</div>
                <div className="selectOption center" >Select</div>
              </div>
            </div>
          </div>
  )
}
