import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';

const StarshipItem = ({starship, url}) => {
  const segments = url.split('/');
  const id = Number(segments[segments.length - 2]);
  return (
    <div className="list-group-item">
      {starship.name}
      <NavLink className="nav-link" to={"/details/" + id}>Details</NavLink>
    </div>
  )
};

export default StarshipItem;