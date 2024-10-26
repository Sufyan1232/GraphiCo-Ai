import React from 'react'
import './all.css';
import fea from './fea1.png';

function AllFeature() {
  return (
    <div className='allfea'>
        <div className='fea1'>
            <h1 className='faeh1'>GraphiCo Features</h1>
            <text className='featext'>Start solving your marketing challenges today with 55+ tools and reports on ByteBazaar.</text>
            <br />
            <button className='feabtn'>Get Started</button>
        </div>
        <div className='fea2'>
            <img src={fea} className='feaimg' />
        </div>
    </div>
  )
}

export default AllFeature