import React from 'react';
import RecipeCard from './RecipeCard.js';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FadeIn from 'react-fade-in';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  backgroundColor: '#6e5a4b',
}));

function RecipeList({ recipes, onDeleteClick }) {
    // console.log('From RecipeList: ', recipes)

    const cardElements = recipes.map(r => {
        return (
            <Grid item>
                <Item>
                    <RecipeCard 
                        key={r.id}
                        recipe={r}
                        onDeleteClick={onDeleteClick}
                    />
                </Item>
            </Grid>
        )
    });


    return (
        <div className="recipe-img">
            <div className="recipe-overlay">
                <div id="recipe-grid">
                    <FadeIn delay="1000" transitionDuration="3000">
                        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Grid container spacing={4}>
                                {cardElements}
                            </Grid>
                        </Box>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}

export default RecipeList;