import React, { useState } from 'react'

export default function Card3() {
    const [minV,setminV] = useState(0);
    const [maxV,setmaxV] = useState(0);
  return (
    <div className="card3" onClick={(e)=>{e.stopPropagation()}}>
            <h2 className="title">Filter by amount</h2>
            <div className="options">
              <div className="maxCount"> Max amount 
              <div className="counter">

              
              <div className="funBtn center" style={{cursor: maxV ? "pointer" : "default" }} onClick={(e)=>{ if(maxV > 0 )setmaxV((val)=>val-1); e.stopPropagation()   }}  > - </div>
              <div style={{fontSize:"22px"}} > {maxV} </div>
              <div className="funBtn center" onClick={(e)=>{setmaxV((val)=>val+1);e.stopPropagation()  }}  > + </div>
              </div>
              
               </div>

               <div className="minCount"> Min amount 
              <div className="counter">
              <div className="funBtn center" style={{cursor: minV ? "pointer" : "default" }}  onClick={(e)=>{ if(minV > 0 )setminV((val)=>val-1);e.stopPropagation() }} > - </div>
              <div style={{fontSize:"22px"}} > {minV} </div>
              <div className="funBtn center" onClick={(e)=>{setminV((val)=>val+1);e.stopPropagation()  }} > + </div>
              </div>
              
               </div>

            </div>

          </div>
  )
}
