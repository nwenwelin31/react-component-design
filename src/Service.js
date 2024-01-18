import React from 'react';
import './service.css';

export default function Service() {
    return (
        <div className='container col-md-6'>
            <div className='heaDiv'>
                <div className="serviceCard">
                    <h3>Title1</h3>
                    <p>Hello</p>
                    <button className='btn btn-dark'>Submit</button>
                </div>

                <div className="serviceCard">
                    <h3>Title2</h3>
                    <p>Hello</p>
                    <button className='btn btn-dark'>Submit</button>
                </div>
                <div className="serviceCard">
                    <h3>Title3</h3>
                    <p>Hello</p>
                    <button className='btn btn-dark'>Submit</button>                
                </div>
            </div>
        </div>
    )
}
