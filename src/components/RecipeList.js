import React from 'react';
import RecipeCard from './RecipeCard.js';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  backgroundColor: '#6e5a4b',
}));

function RecipeList({ recipes }) {
    // console.log('From RecipeList: ', recipes)

    const cardElements = recipes.map(r => {
        return (
            <Grid item>
                <Item>
                    <RecipeCard 
                        key={r.id}
                        recipe={r}
                    />
                </Item>
            </Grid>
        )
    });


    return (
        <div className="recipe-list">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    {cardElements}
                </Grid>
            </Box>
        </div>
    );
}

export default RecipeList;