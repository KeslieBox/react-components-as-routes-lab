import React from 'react';
import { movies } from '../data';


const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((m, i) => 
          <div key={i}>
            <h3>{m.title}</h3>
            <p>{m.time}min</p>
            <ul>
              {m.genres.map((g, i) => 
                <li key={g}>{g}</li>
              )}
            </ul>
          </div>
        )}     
    </div>
  );
};

export default Movies;
