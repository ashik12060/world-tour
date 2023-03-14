import React from 'react';
import './Banner.css';
import back_img from '../../images/umbrella-chair-beach-sea.jpg'
const Banner = () => {
    return (
        <div>
            <div><img src={back_img} alt="nature" /></div>

            <div class="text-block">
                <div className='mid-nav'>

                    <div className='banner-section'><h4>Destination</h4>
                        <h5 style={{ color: 'gray' }}>Where can we take you?</h5>

                    </div>
                    <div className='banner-section'>
                        <p>Time</p>
                        <h5>Tues Mar-23-Wed, Mar-25</h5>
                    </div>
                    <div>
                        <button className='find-button'>Find Hotel</button>
                    </div>
                </div>

            </div>
            {/* ................................................................................ */}
            <div className="container1">
                <div class="text-block1">
                
                    <p>DELIGHT IN THE EXPECTED</p>
                    <h1>Earn 1,000 Bonus Poins</h1>
                    <h4>Plus 1 bonus Elite Night Credit each night.</h4>
                    <button className='find-button'>Register Now</button>
                </div>
            </div>






        </div>
    );
};

export default Banner;