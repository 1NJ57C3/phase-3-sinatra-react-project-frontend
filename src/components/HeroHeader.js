import React from 'react';

import FadeIn from 'react-fade-in';

function HeroHeader() {

    return (
        <div className='hero-content'>
            <FadeIn delay="1000" transitionDuration="2000">
                <img src='/cmLogo2.png'/>
            </FadeIn>
                <img src='/line.png'/>
            <FadeIn delay="1000" transitionDuration="2000">
                <p id='slogan-text'>
                    Making the world a little less angry.
                </p>
            </FadeIn>
        </div>
    )
}

export default HeroHeader;