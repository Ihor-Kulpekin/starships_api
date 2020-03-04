import React, {useEffect} from 'react';
import {useParams} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';

import ListStarships from './ListStarships';
import {changePage, getStarships} from '../../actions/actions';

const StarshipsContainer = () => {
  const starships = useSelector((state) => state.starships);
  const {search} = useParams();
  const dispatch = useDispatch();

  const fetchStarships = () => {
    dispatch(getStarships(search))
  };

  const handleChangePage = (pageValue) => {
    dispatch(changePage(pageValue))
  };

  useEffect(fetchStarships, []);

  return (
    <>
      <ListStarships changePage={handleChangePage} starships={starships}/>
    </>
  );
};

export default StarshipsContainer;