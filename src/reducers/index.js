import { combineReducers } from 'redux';
import boardReducer from '../reducers/boardReducer'

const rootReducer = combineReducers({
  board: boardReducer
});

export default rootReducer;
