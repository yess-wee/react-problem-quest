import React, { useEffect } from 'react'
import { useState } from 'react'


const lights = {
    red:'red',
    yellow: 'yellow',
    green:'green',
}


const TrafficLight = () => {

    const [active,setActive] = useState(lights.red)


    useEffect(()=>{
        switch (active) {
            case lights.red:
                setTimeout(() => {
                    setActive(lights.yellow)
                }, 4000);
                break;
        
            
            case lights.yellow:
                setTimeout(() => {
                    setActive(lights.green)
                }, 500);
                break;

                    
            case lights.green:
                setTimeout(() => {
                    setActive(lights.red)
                }, 3000);
                break;
        
            
            default:
                break;
        }


    }, [active])





  return (
    <div className='wrapper'>
      
      <div className='light green'
      style={active !== lights.green ? {opacity: .5} : null}>A</div>

      <div className='light yellow'
      style={active !== lights.yellow ? {opacity: .5} : null}>B</div>
      
      <div className='light red'
      style={active !== lights.red ? {opacity: .5} : null}>C</div>
    </div>
  )
}

export default TrafficLight
