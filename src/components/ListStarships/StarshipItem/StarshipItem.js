import React from 'react';
import {MDBLink} from 'mdbreact';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';

const StarshipItem = ({starship, url, styles}) => {
  const segments = url.split('/');
  const id = Number(segments[segments.length - 2]);
  return (
    <MDBLink to={"/details/" + id} className="btn aqua-gradient">
      <div className={styles.box} style={{marginBottom: 15, marginTop: 15}}>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS083DcZFHU7qhuniGN_hcHSvUQ4ZA1krtWuDAyewRMYfujTEHE'
          alt={'Starwars'}/>
        {starship.name}
      </div>
    </MDBLink>
  )
};

StarshipItem.propTypes = {
  starship: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired
};

export default StarshipItem;