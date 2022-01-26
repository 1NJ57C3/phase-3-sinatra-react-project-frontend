import React, { useEffect, useState } from 'react';
import './App.css';
import HeroHeader from './components/HeroHeader';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import BackToTop from './components/BackToTop';
import NavBar from './components/NavBar';

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
        <NavBar />
        <HeroHeader />
        <RecipeList recipes={recipes} />
        <RecipeForm />
        <BackToTop showBelow={250} />
        
    </div>
  );
}

export default App;
