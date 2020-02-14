import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getDetailStarship} from "../actions/actions";
import StarshipDetails from "../components/StarshipDetails";

const StarshipDetailsContainer = ({match}) => {

  const starshipDetails = useSelector((state)=>state.starshipDetails);

  const dispatch = useDispatch();

  const getDetailsStarship1 = () => {
    dispatch(getDetailStarship(match.params.id))
  };

  useEffect(getDetailsStarship1,[]);

  return (
    <>
      <StarshipDetails id={match.params.id} starshipDetails={starshipDetails}/>
    </>
    )
};

export default StarshipDetailsContainer;