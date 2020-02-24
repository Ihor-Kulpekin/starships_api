import React from 'react';
import {MDBListGroupItem, MDBNavLink} from 'mdbreact';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';

const StarshipItem = ({starship, url}) => {
  const segments = url.split('/');
  const id = Number(segments[segments.length - 2]);
  return (
    <MDBListGroupItem hover={true}>
      <MDBNavLink className="nav-link" to={"/details/" + id}>{starship.name}</MDBNavLink>
    </MDBListGroupItem>
  )
};

StarshipItem.propTypes = {
  starship: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired
};

export default StarshipItem;