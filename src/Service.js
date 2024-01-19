import React from 'react';
import './service.css';
import service1 from './s1.jpg';
import service2 from './s2.avif';
import Service3 from './s4.jpg';

export default function Service() {
    return (
        <div className='service'>
             <h3>Plant Categories</h3>
            <div className='serviceDiv'>
                <div className="serviceCard">
                    <img src={service1} className='serviceImg'></img>
                    <p> They are labeled as producers. They serve as food to other organisms, including animals. Animals, in contrast, are heterotrophs and they need</p>
                    <button className='btn btn-dark'>Shop Now</button>
                </div>

                <div className="serviceCard">
                    <img src={service2} alt='' className='serviceImg'></img>
                    <p> They are labeled as producers. They serve as food to other organisms, including animals. Animals, in contrast, are heterotrophs and they need</p>
                    <button className='btn btn-dark'>Shop Now</button>
                </div>
                <div className="serviceCard">

                    <img src={Service3} alt='' className='serviceImg'></img>
                    <p> They are labeled as producers. They serve as food to other organisms, including animals. Animals, in contrast, are heterotrophs and they need</p>
                    <button className='btn btn-dark'>Shop Now</button>                
                </div>
                
            </div>
        </div>
    )
}
