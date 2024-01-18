import React from 'react';
import './header.css';

export default function header() {
    return (
        <div className='container col-md-6'>
            <ul>
                <li className='li'><a href="#home">Home</a></li>
                <li className='li'><a href="#news">News</a></li>
                <li className='li'><a href="#contact">Contact</a></li>
                <li className='li'><a href="#about">About</a></li>
            </ul>

        </div>
    )
}
