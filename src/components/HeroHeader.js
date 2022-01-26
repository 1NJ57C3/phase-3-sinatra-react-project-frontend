import React from 'react';

function HeroHeader() {

    return (
        <div className='hero-img'>
            <div className='overlay'>
                <div className='hero-content'>
                    <img src='/cmLogo2.png' />
                    <p id='slogan'>
                        Trying to make the world a little less angry.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroHeader;