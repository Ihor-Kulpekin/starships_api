import {combineReducers} from 'redux';

import changePage from './changePage';
import starshipDetails from './starshipDetails';
import starships from './starships';

export default combineReducers({changePage, starshipDetails, starships})