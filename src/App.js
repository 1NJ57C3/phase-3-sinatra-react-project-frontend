import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import FilterGrid from './components/FilterGrid';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import NavBar from './components/NavBar';


const API = 'http://localhost:9292/recipes'

function App() {
  const [recipes, setRecipes] = useState([]);
  const [updateRecipes, setUpdateRecipes] = useState([]);
  const [filtered, setFiltered] = useState([]);


  useEffect(() => {
    fetch(API)
    .then((r) => r.json())
    .then((recipes) => setRecipes(recipes))
  }, [updateRecipes])

  function handleAddRecipe(newRecipe) {
    setRecipes([...recipes, newRecipe]);
    setUpdateRecipes(updateRecipes)
  }

  function onDeleteClick(card) {
    fetch(`http://localhost:9292/recipes/${card}`, {
      method: 'DELETE',
    });
    setUpdateRecipes(!updateRecipes)
  }

  function handleFilterBy(cat) {

    const filterRec = recipes.filter(r => {
        if (cat == 'espresso') {
          return r.prep_type === cat
        } else if (cat == 'iced') {
          return r.is_heated === false
        } else if (cat == 'hot') {
          return r.is_heated === true
        } else {
          return recipes
        } 
      })
    setFiltered([...filterRec])
    }

   const toDisplay = filtered.length < 1 ? recipes : filtered

  return (
    <div className="App">
      <NavBar />
      <HeroHeader />
      <FilterGrid handleFilterBy={handleFilterBy} />
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
