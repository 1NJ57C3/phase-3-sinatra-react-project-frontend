import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeroHeader from './components/HeroHeader';
import DrinkList from './components/DrinkList';
import RecipeForm from './components/RecipeForm';

function App() {
  return (
    <div className="App">
      <DrinkList />
    </div>
  );
}

export default App;
