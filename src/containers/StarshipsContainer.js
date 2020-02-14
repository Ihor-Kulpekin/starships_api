import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ListStarships from '../components/ListStarships';
import {changePage, getStarships} from '../actions/actions';

const StarshipsContainer = () => {
  const starships = useSelector((state) => state.starships);
  const dispatch = useDispatch();

  const fetchStarships = (search) => {
    dispatch(getStarships(search))
  };

  const handleChangePage = (pageValue) => {
    dispatch(changePage(pageValue))
  };

  useEffect(fetchStarships, []);

  return (
    <div>
      <ListStarships changePage={handleChangePage} starships={starships}/>
    </div>
  );
};

export default StarshipsContainer;