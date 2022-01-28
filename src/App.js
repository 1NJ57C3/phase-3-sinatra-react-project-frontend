import React, { useEffect, useState } from 'react';
import './App.css';
import HeroHeader from './components/HeroHeader';
import FilterGrid from './components/FilterGrid';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import NavBar from './components/NavBar';


const API = 'http://localhost:9292/recipes'

function App() {
  const [recipes, setRecipes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [updateRecipes, setUpdateRecipes] = useState([]);

  useEffect(() => {
    fetch(API)
    .then((r) => r.json())
    .then((recipes) => setRecipes(recipes))
  }, [updateRecipes])

  function handleAddRecipe(newRecipe) {
    setRecipes({...recipes, newRecipe});
    // ! why won't new card render before re-load ???
    setUpdateRecipes([...updateRecipes])
  }

  function onDeleteClick(card) {
    fetch(`http://localhost:9292/recipes/${card}`, {
      method: 'DELETE',
    });
    setUpdateRecipes(!updateRecipes)
  }

  return (
    <div className="App">
        <NavBar />
        <HeroHeader />
        <FilterGrid />
        <RecipeList 
          recipes={recipes} 
          onDeleteClick={onDeleteClick} 
        />
        <RecipeForm onAddRecipe={handleAddRecipe} />
        <Footer />
        <BackToTop showBelow={250} />
        
    </div>
  );
}

export default App;
