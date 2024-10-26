import React from 'react'
import './all.css';
import bat from './bat1.png'

function Bat() {

    console.log("Allah Akbar")

  return (
    <div className='bat'>
        <div className='bleft'>
            <h1 className='h1'>Ready to enhance your market analysis superpowers?</h1>
            <h3 className='h3'>Scan the competitive landscape, unpack rivals’ strategies, and grow your market share with Semrush .Trends.</h3>
            <button className='batbtn'>Level up today</button>
        </div>   
        <div>
            <img src={bat} alt='bat' className='batimg' />
        </div>   
    </div>
  )
}

export default Bat