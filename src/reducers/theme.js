import { SET_THEME } from '../constants';

const initialState = {
  type: 'lightTheme',
  bool: true,
};

const theme = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
};

export default theme;