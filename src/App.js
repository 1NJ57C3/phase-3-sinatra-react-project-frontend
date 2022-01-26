import React, { useEffect, useState } from 'react';
import './App.css';
import HeroHeader from './components/HeroHeader';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import BackToTop from './components/BackToTop';

const API = 'http://localhost:9292/recipes'

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(API)
    .then((r) => r.json())
    .then((recipes) => setRecipes(recipes))
  }, [])

  return (
    <div className="App">
        <HeroHeader />
        <RecipeList recipes={recipes} />
        <RecipeForm />
        <BackToTop showBelow={250} />
    </div>
  );
}

export default App;
