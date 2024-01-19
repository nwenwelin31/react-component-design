import React from 'react';
import './header.css';
import logo from './green_leaves_logo.jpg';

export default function header() {
    return (
        <div className=''>
            <ul>
                <li className='li'><a href=""><img src={logo} alt=''></img></a></li>
                <li className='li'><a href="#home">Home</a></li>
                <li className='li'><a href="#feature">Feature</a></li>
                <li className='li'><a href="#blog">Blog</a></li>
            </ul>

        </div>
    )
}
