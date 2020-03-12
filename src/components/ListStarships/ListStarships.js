import React from 'react';
import PropTypes from 'prop-types';

import StarshipItem from './StarshipItem/StarshipItem';
import styles from './ListStarships.module.css'

import {MDBBtn} from 'mdbreact';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";

const ListStarships = ({results, previous, next, changePage}) => {
  const pageNumberRedExp = /\d/;
  const previousPage = previous !== null ? previous.match(pageNumberRedExp) : '';
  const nextPage = next !== null ? next.match(pageNumberRedExp) : '';
  return (
    <div>
      <div className={styles.info}>
        <div className={styles.boxes}>
          {results !== undefined && (
            results.length ?
              results.map((starship) =>
                <StarshipItem key={starship.name}
                              styles={styles}
                              url={starship.url}
                              starship={starship}/>)
              : <p>No Starship</p>
          )
          }
        </div>
      </div>
      <div className='d-flex justify-content-between' style={{marginTop: 5, marginBottom: 5}}>
        <NavLink to={'/starships?page=' +previousPage}>
          <MDBBtn color='dark' className={styles.changePageBtn} rounded disabled={!previous}
                  onClick={() => changePage(previous)}>
            Previous
          </MDBBtn>
        </NavLink>
        <NavLink to={'/starships?page=' + nextPage}>
          <MDBBtn color='dark' className={styles.changePageBtn} disabled={!next}
                  onClick={() => changePage(next)}>
            Next
          </MDBBtn>
        </NavLink>
      </div>
    </div>
  )
};

ListStarships.propTypes = {
  results: PropTypes.array.isRequired,
  next: PropTypes.string,
  previous: PropTypes.string,
  changePage: PropTypes.func.isRequired
};

export default ListStarships;