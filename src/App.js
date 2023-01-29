import { useEffect, useState } from 'react';
import './App.css';
import BottomCon from './components/BottomCon';

const bg = (
  <svg width="1051" height="227" viewBox="0 0 1051 227" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 114.699H937.408" stroke="url(#paint0_linear_2_747)" stroke-width="2.66783"/>
<g opacity="0.3" filter="url(#filter0_f_2_747)">
<circle cx="938.075" cy="113.698" r="72.6983" fill="#E6007A" fill-opacity="0.6"/>
</g>
<circle cx="938.075" cy="113.698" r="8.67044" fill="#E6007A"/>
<circle opacity="0.3" cx="938.075" cy="113.698" r="21.3426" fill="#E6007A" fill-opacity="0.6"/>
<circle opacity="0.3" cx="938.075" cy="113.698" r="44.0192" fill="#E6007A" fill-opacity="0.6"/>
<defs>
<filter id="filter0_f_2_747" x="825.359" y="0.982574" width="225.432" height="225.431" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="20.0087" result="effect1_foregroundBlur_2_747"/>
</filter>
<linearGradient id="paint0_linear_2_747" x1="937.408" y1="115.17" x2="-0.333462" y2="115.17" gradientUnits="userSpaceOnUse">
<stop offset="0.270833" stop-color="#E6007A"/>
<stop offset="1" stop-color="#E6007A" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

)

function App() {
  var [isExpanded,setIsExpanded] = useState(false)
  
  useEffect(()=>{console.log(isExpanded,"isExpanded")
},[isExpanded])

  return (
    <div className="App">
      <div className="App-header" onClick={()=>{setIsExpanded(false)}} >
        {/* Trespassers Slider */}
          <div className='firstSlider'>
          {bg}
          </div>
          <div className='secondSlider'>
          {bg}
          </div>
          
        {/* End of Trespassers Slider*/}

        <div className='challenge' > Challenge <span>.</span> </div>
        <div style={{zIndex:"1"}} >
          <h1 className='title'>What are you capable of?</h1>
          <div className='description'>Do not underestimate yourselves. You are more capable <br/>  than what you think your are capable of.</div>
        </div>

        <BottomCon isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        </div>
    </div>
  );
}

export default App;
