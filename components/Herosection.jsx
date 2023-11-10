import React from 'react'
import Buttons from './Buttons'

export default function Herosection() {
  return (
    <div className='heroSectn '>
       
        <div className="overally p-12">
        <h1 className=''>Best Football Prediction Site in the World 2023</h1>
        <p>Are you looking for a reliable football prediction site to help guide your betting decisions? Look no further than 1960Tips.com, the best football prediction site in the world. Our expert analysts and tipsters provide free daily betting tips, ranging from high-risk bets to safe options.</p>
        <div className="service-list  ind py-4 ">
            <li>All visitors can only see our free daily soccer tips.</li>
            <li>All visitors can only see our free daily soccer tips.</li>
            <li>All visitors can only see our free daily soccer tips.</li>
        </div>
        <div className="cta-btns flex gap-4 ">
            <Buttons color={'bgcolor'}  name={'Register for Free Now'}/>
            <Buttons color={'btnColor'} className='btn-color' name={'How to subscribe'}/>
            <Buttons color={'border'} name={'Check Past predictions'}/>
        </div>
        </div>
        
    </div>
  )
}
