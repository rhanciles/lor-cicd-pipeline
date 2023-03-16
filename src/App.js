import './App.css';
import React from 'react';
import CharacterGallery from './components/CharacterGallery'

function App() {

  return (
    <div data-test="component-app">
      <h1>Lord of the Rings</h1>
      <CharacterGallery />
    </div>
  );
}

export default App;
