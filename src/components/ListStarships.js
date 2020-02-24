import React from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';
import {MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCol, MDBContainer, MDBListGroup, MDBRow,} from 'mdbreact';
import 'bootstrap/dist/css/bootstrap.min.css'

import styles from './ListStarships.module.css'
import StarshipItem from './StarshipItem';

const ListStarships = (props) => {
  const {results, next, previous} = props.starships;
  return (
    <MDBContainer className={styles.container} style={{opacity: 0.6}}>
      <MDBRow center>
        <MDBCol size='12' sm='12' lg='10'>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>List of Starships</MDBCardTitle>
              <MDBListGroup>
                {results !== undefined && (
                  results.length ?
                    results.map((starship) =>
                      <StarshipItem key={starship.name} url={starship.url} starship={starship}/>)
                    : <CircularProgress/>
                )
                }
              </MDBListGroup>
              <div className='d-flex justify-content-between' style={{marginTop: 10}}>
                <MDBBtn color='primary' rounded disabled={!previous}
                        onClick={() => props.changePage(previous)} className={styles.button}>
                  Previous
                </MDBBtn>
                <MDBBtn color='primary' disabled={!next}
                        onClick={() => props.changePage(next)} className={styles.button}>
                  Next
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
};

ListStarships.propTypes = {
  starships: PropTypes.object.isRequired
};

export default ListStarships;