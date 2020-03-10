import React, {useEffect} from 'react';
import {useParams} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';

import {getDetailStarship} from '../../actions/actions';
import StarshipDetails from './StarshipDetails';
import {CircularProgress} from "@material-ui/core";

const StarshipDetailsContainer = () => {
  const starshipDetails = useSelector((state) => state.starshipDetails);
  const dispatch = useDispatch();
  const {id} = useParams();

  console.log(starshipDetails);

  const getDetails = () => {
    dispatch(getDetailStarship(id));
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      {starshipDetails.loading===true?<CircularProgress color={"inherit"}/>:
        <StarshipDetails id={id} starshipDetails={starshipDetails}/>}
    </>
  )
};

export default StarshipDetailsContainer;