import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  console.log(props)
  function deleteHandler(){
    fetch(`https://react-api-2518b-default-rtdb.firebaseio.com/movies/${props.id}.json`,{
      method:"DELETE"
    }).then(props.onLoad)
  }

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={deleteHandler}>Delete</button>
    </li>
  );
};

export default Movie;
