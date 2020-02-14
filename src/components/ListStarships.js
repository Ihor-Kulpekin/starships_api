import React from 'react';

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import styles from './ListStarships.module.css';

import StarshipItem from './StarshipItem';
import CircularProgress from "@material-ui/core/CircularProgress";

const ListStarships = (props) => {
  const {results, next, previous} = props.starships;
  return (
    <div className={bootstrap.cardBody+ ' ' + styles.card}>
      <div className="list-group">
        <h4>LIST OF STARSHIPS</h4>
        {results !== undefined && (
          results.length ?
            results.map((starship) =>
              <StarshipItem url={starship.url} starship={starship}/>)
            : <CircularProgress/>
        )
        }
      </div>
      <div className="d-flex justify-content-between" style={{marginTop: 10}}>
        <button onClick={() => props.changePage(previous)} disabled={!previous}>
          PREVIOUS
        </button>
        <button onClick={() => props.changePage(next)} disabled={!next}>
          NEXT
        </button>
      </div>
    </div>
  )
};

export default ListStarships;