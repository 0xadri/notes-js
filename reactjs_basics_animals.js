import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

function displayFact(e){
  const animalName = e.target.alt;
  const selectedAnimal = animals[animalName];
  const optionIndex = Math.floor(Math.random() * selectedAnimal.facts.length);
  const selectedFact = selectedAnimal.facts[optionIndex];
  document.getElementById('fact').innerHTML = selectedFact;
  return selectedFact;
}
const title = '';
const background = (
  <img
    className = 'background'
    alt = 'ocean'
    src = '/images/ocean.jpg'
  />
);
const images = []
for (const animal in animals) {
  images.push(
    <img 
      key = {animal}
      className = 'animal'
      alt = {animal}
      src = {animals[animal].image}
      aria-label = {animal}
      role = 'button'
      onClick = {displayFact}
    /> 
  )
};
const showBackground = true;
const animalFacts = (
  <div>
    <h1>
      {title || 'Click an animal for a fun fact'}
    </h1>
    {showBackground && background}
    <div className = 'animals'>
      {images}
    </div>
    <p id='fact'></p>
  </div>
);

root.render(animalFacts);