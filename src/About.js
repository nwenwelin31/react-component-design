import React from 'react';
import './about.css';
import plantAbout from './blander.png';

export default function About() {
  return (
    <div className='about'>
      <div className='cardAbout'>
        <img src={plantAbout}></img>
      </div>
      <div className='textAbout'>
        <h4><b>Full Plants Care Services</b></h4>
        <small>Plants clean air and filter water, bacteria decompose wastes, bees</small>
        <p><b><a><u>Learn more</u></a></b></p>
      </div>
    </div>
  )
}
