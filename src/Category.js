import React from 'react';
import './category.css';
import category1 from './category1.jpg';
import category2 from './category2.avif';
import category3 from './category4.webp';

export default function Category() {
    return (
        // Category Section
        <div id='category' className='category'>
             <h3>Plant Categories</h3>
            <div className='categoryDiv'>
                <div className="categoryCard">
                    <img src={category1} className='categoryImg'></img>
                    <p> They are labeled as producers. They serve as food to other organisms, including animals. Animals, in contrast, are heterotrophs and they need</p>
                    <button className='btn btn-dark'>Shop Now</button>
                </div>

                <div className="categoryCard">
                    <img src={category2} alt='' className='categoryImg'></img>
                    <p> They are labeled as producers. They serve as food to other organisms, including animals. Animals, in contrast, are heterotrophs and they need</p>
                    <button className='btn btn-dark'>Shop Now</button>
                </div>
                <div className="categoryCard">

                    <img src={category3} alt='' className='categoryImg'></img>
                    <p> They are labeled as producers. They serve as food to other organisms, including animals. Animals, in contrast, are heterotrophs and they need</p>
                    <button className='btn btn-dark'>Shop Now</button>                
                </div>
                
            </div>
        </div>
    )
}
