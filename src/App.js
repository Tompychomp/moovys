
import './App.css';
import React from 'react'
const movies = [
  {title: 'Mean Girls '},
  {title: 'Hackers '},
  {title: 'The Grey '},
  {title: 'Sunshine '},
  {title: 'Ex Machina'},
];

const title = movies.map((movie) => 
  <p>{movie.title}</p>);


function App() {
  return (
  <div>
    {title}
  </div>

  );
}

export default App;
