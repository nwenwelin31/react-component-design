import React from 'react';
import './home.css';
import plant from './home.webp';

export default function home() {
    return (
        // Home Section
            <div id='home' className='headDiv'>

                <div className="cardText">
                    <p>Plants are vital to life on Earth. They provide food for people and animals.
                         They also make the oxygen that other living things breathe.
                          Plants produce the oxygen as part of the process of photosynthesis.
                          They provide food for people and animals.</p>
                </div>

                <div className="cardImg">
                   <img src={plant} alt=''></img>
                </div>

            </div>


    )
}
