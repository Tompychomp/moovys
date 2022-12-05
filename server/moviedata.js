import Express  from 'express';


const movies = 
[
{title: 'Mean Girls '},
{title: 'Hackers '},
{title: 'The Grey '},
{title: 'Sunshine '},
{title: 'Ex Machina'},
];



function Movies()  {
title = movies.map((movie) => {
return(movie.title)});
  
}

export default Movies; 