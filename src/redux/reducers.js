import { combineReducers } from 'redux';

import theme from '../reducers/theme';
import arr from '../reducers/arr';
import links from '../reducers/links';


const rootReducer = combineReducers({
  theme,
  arr,
  links,
});

export default rootReducer;