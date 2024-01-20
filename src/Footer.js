import React from 'react';
import './footer.css';
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function footer() {
  return (
    // footer section
    <div className='footer'>
      <div className='divfooter'>
        <i>
        <p><IoLocationSharp /> <small><b>5th Baho Road, Yangon.</b></small></p>
        <p><FaPhoneFlip />  <small><b>09888777666</b></small></p>
        <p><MdEmail />  <small><b>support@company.com</b></small></p>
        </i>
      </div>
      <div className='divfooter'>
        <p><b>About the company</b></p>
        <small>Most gardens contain a mix of different plants, including perennials, annuals, shrubs and trees.</small>
      </div>
    </div>
  )
}
