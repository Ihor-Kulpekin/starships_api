import React from 'react';
import PropTypes from 'prop-types';

import StarshipItem from './StarshipItem/StarshipItem';
import styles from './ListStarships.module.css'

import {MDBBtn} from 'mdbreact';
import {CircularProgress} from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListStarships = (props) => {
  const {results, next, previous} = props.starships;
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
              : <CircularProgress/>
          )
          }
        </div>
      </div>
      {results !== undefined && (
        results.length ?
          <div className='d-flex justify-content-between' style={{marginTop: 5, marginBottom: 5}}>
            <MDBBtn color='dark' className={styles.changePageBtn} rounded disabled={!previous}
                    onClick={() => props.changePage(previous)}>
              Previous
            </MDBBtn>
            <MDBBtn color='dark' className={styles.changePageBtn} disabled={!next}
                    onClick={() => props.changePage(next)}>
              Next
            </MDBBtn>
          </div>
          : ''
      )
      }
    </div>
  )
};

ListStarships.propTypes = {
  starships: PropTypes.object.isRequired
};

export default ListStarships;