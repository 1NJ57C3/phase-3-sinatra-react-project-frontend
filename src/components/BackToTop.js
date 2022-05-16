import * as React from 'react';
import { useEffect, useState } from 'react';

import { makeStyles } from '@mui/styles';
import { IconButton, Icon } from '@mui/material';

const styles = makeStyles((theme) => ({
    toTop: {
        zIndex: 2,
        position: 'fixed',
        bottom: '6vh',
        right: '7vh',
        backgroundColor: '#bbac9b',
        color: '#292929',
        "&:hover, .Mui-focusVisible": {
            transition: '0.3s',
            backgroundColor: '#81614b',
            color: '#fff'
        },
    }
}));

const BackToTop = ({showBelow}) => {
    const [show, setShow] = useState(showBelow ? false : true);

    const classes = styles();

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: 'smooth'})
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    return (
        <div>
            {show &&
                <IconButton onClick={handleClick} className={classes.toTop}>
                    <Icon>^</Icon>
                </IconButton>
            }
        </div>

    );
}

export default BackToTop;
