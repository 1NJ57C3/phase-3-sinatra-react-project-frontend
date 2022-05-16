import React from 'react';

import FadeIn from 'react-fade-in';

function Header() {

    return (
        <div className='hero-container'>
            <FadeIn delay="1000" transitionDuration="2000">
                <img src='/cmLogo2.png' alt='CoffeMe Logo' height='100%'/>
            </FadeIn>
                <img src='/line.png' alt='line break'/>
            <FadeIn delay="1000" transitionDuration="2000">
                <p id='slogan-text'>
                    Making the world a little less angry one coffee recipe at a time.
                </p>
            </FadeIn>
        </div>
    )
}

export default Header;