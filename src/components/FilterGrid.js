import React from 'react';

import FadeIn from 'react-fade-in';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
    {
      img: '/1.png',
      title: 'espresso',
    },
    {
      img: '/2.png',
      title: 'iced',
    },
    {
      img: '/3.png',
      title: 'hot',
    },
    {
      img: '/4.png',
      title: 'coffee',
    }
]

function FilterGrid() {

    function handleClick(e, item) {
        const cat = item.title
        console.log(cat)
        fetch(`http://localhost:9292/recipes/${title}`)
        .then((r) => r.json())
        .then((recipes) => setRecipes(recipes))
    }


    return (
        <div className="filter-img">
            <div className="filter-overlay">
                <div id="filter-grid">
                    <FadeIn delay="1000" transitionDuration="3000">
                    <ImageList 
                        sx={{ width: 1500, height: 450 }} 
                        cols={4} 
                        rowHeight={164}
                    >
                        {itemData.map((item) => (
                            <ImageListItem 
                                key={item.img} 
                                onClick={(e) => handleClick(e, item)}
                            >
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            </ImageListItem>
                        ))}
                        </ImageList>
                    );

                    </FadeIn>
                </div>
            </div>
        </div>
    );
}

export default FilterGrid;