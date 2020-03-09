import React, {useEffect} from 'react';
import {useParams} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';

import {getDetailStarship} from '../../actions/actions';
import StarshipDetails from './StarshipDetails';

const StarshipDetailsContainer = () => {
  const starshipDetails = useSelector((state) => state.starshipDetails);
  const dispatch = useDispatch();
  const {id} = useParams();

  const getDetails = () => {
    dispatch(getDetailStarship(id));
  };

  useEffect(getDetails, []);

  return (
    <>
      <StarshipDetails id={id} starshipDetails={starshipDetails}/>
    </>
  )
};

export default StarshipDetailsContainer;