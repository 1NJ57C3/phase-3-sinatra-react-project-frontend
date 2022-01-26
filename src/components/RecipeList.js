import React from 'react';
import RecipeCard from './RecipeCard.js';

function RecipeList({ recipes }) {
    console.log('From RecipeList: ', recipes)

    return (
        <div className="recipe-list">
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
        </div>
    )
}

export default RecipeList;