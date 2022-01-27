import React, { useEffect, useState } from 'react';
import './App.css';
import HeroHeader from './components/HeroHeader';
import FilterGrid from './components/FilterGrid';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import Footer from './components/Footer';
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
        <FilterGrid />
        <RecipeList recipes={recipes} />
        <RecipeForm />
        <Footer />
        <BackToTop showBelow={250} />
    </div>
  );
}

export default App;
