import React from 'react';
import './styles.css';
import Banner1 from '../../assets/banner-1.jpg';
import Banner2 from '../../assets/banner-2.png';
import Banner3 from '../../assets/banner-3.png';
import Banner4 from '../../assets/banner-4.png';
import Banner5 from '../../assets/banner-5.jpg';

function Gallery() {
    return (
        <div className='gallery-container'>
            <div className='gallery-content'>
                <div id='banner1'>
                    <img src={Banner1} />
                </div>
                <div className='right-side'>
                    <div className='right-top-side'>
                        <div>
                            <img src={Banner2} />
                        </div>
                        <div>
                            <img src={Banner3} />
                        </div>
                    </div>
                    <div>
                        <img src={Banner5} />
                    </div>
                    <div id='banner4'>
                        <img src={Banner4} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;