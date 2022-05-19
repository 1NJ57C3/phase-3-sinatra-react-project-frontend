import React from 'react';

import FadeIn from 'react-fade-in';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import SearchBar from './SearchBar';

const itemData = [
    {
      img: '/2.png',
      title: 'all',
    },
    {
      img: '/1.png',
      title: 'espresso',
    },
    {
      img: '/3.png',
      title: 'hot',
    },
    {
      img: '/4.png',
      title: 'iced',
    }
]

function FilterGrid({ handleFilterBy, search, setSearch }) {

    function handleClick(e, item) {
        const cat = item.title
        handleFilterBy(cat)
    }


    return (
        <div className="filter-background">
            <div className="filter-overlay">
                <div id="filter-grid">
                    <FadeIn delay="1000" transitionDuration="3000">
                    <ImageList
                        padding={8}
                        cols={4}
                    >
                        {itemData.map((item) => (
                            <a href='#recipe-list' 
                            key={item.img} >
                            <ImageListItem 
                                onClick={(e) => handleClick(e, item)}
                            >
                            <img
                                className='filter-icon'
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            </ImageListItem>
                            </a>
                        ))}
                    </ImageList>
                    </FadeIn>
                </div>
                <div style={{margin: 'auto', width: '40%'}}>
                    <SearchBar search={search} setSearch={setSearch} />
                </div>
            </div>
        </div>
    );
}

export default FilterGrid;