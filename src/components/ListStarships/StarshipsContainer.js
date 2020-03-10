import React, {useEffect} from 'react';
import {useParams} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';

import ListStarships from './ListStarships';
import {changePage, getStarships} from '../../actions/actions';

import {CircularProgress} from '@material-ui/core';

const StarshipsContainer = () => {
  const starships = useSelector((state) => state.starships.payload);
  const loading = useSelector((state) => state.starships.loading);
  const changePageLoading = useSelector((state)=>state.changePage.loading);
  const dispatch = useDispatch();
  const {search} = useParams();

  console.log(starships);

  const fetchStarships = () => {
    dispatch(getStarships(search))
  };

  const handleChangePage = (pageValue) => {
    dispatch(changePage(pageValue))
  };

  console.log(loading);

  useEffect(fetchStarships, []);

  return (
    <>
      {loading === true ||changePageLoading===true? <CircularProgress color={"inherit"}/> :
        <ListStarships changePage={handleChangePage} {...starships}/>}
    </>
  );
};

export default StarshipsContainer;