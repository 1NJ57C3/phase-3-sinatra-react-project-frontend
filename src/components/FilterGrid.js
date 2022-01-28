import React from 'react';

import { styled } from '@mui/material/styles';
import FadeIn from 'react-fade-in';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

function srcset(image, width, height, rows = 1, cols = 4) {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${
        height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

const itemData = [
    {
      img: '/icon.png',
      title: 'Espresso Recipes',
      rows: 2,
      cols: 2,
    },
    {
      img: '/icon1.png',
      title: 'Iced Recipes',
    },
    {
      img: '/icon2.png',
      title: 'Hot Recipes',
    },
    {
      img: 'icon3.png',
      title: 'Coffee Recipes',
      cols: 2,
    }
]

function FilterGrid() {


    return (
        <div className="filter-img">
            <div className="filter-overlay">
                <div id="filter-grid">
                    <FadeIn delay="1000" transitionDuration="3000">
                        <div id='filter-icons'>
                            <img src='/1.png' alt='filter by icon' />
                            <img src='/2.png' alt='filter by icon' />
                            <img src='/3.png' alt='filter by icon' />
                            <img src='/4.png' alt='filter by icon' />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}

export default FilterGrid;