import React, { useState } from 'react';
import './App.css';
import HeroHeader from './components/HeroHeader';
import DrinkList from './components/DrinkList';
import RecipeForm from './components/RecipeForm';
import BackToTop from './components/BackToTop';

function App() {
  const [drinks, setDrinks] = useState([]);

  return (
    <div className="App">
        <HeroHeader />
        <DrinkList />
        <RecipeForm />
        <BackToTop showBelow={250} />
    </div>
  );
}

export default App;
