import React from 'react';
import Weather from "./components/Weather";
import BurgerMenu from "./components/BurgerMenu";
import './App.css';

function App() {
  return (
    <div className="App">
      <BurgerMenu />
      <Weather />
    </div>
  );
}

export default App;
