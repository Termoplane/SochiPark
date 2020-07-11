import { SET_THEME, SET_ARR } from '../constants';

const TYPES_MAPPER = {
  'lightTheme': true,
  'darkTheme': false,
};

export const set = value => ({
  type: SET_THEME,
  payload: value,
});

export const changeTheme = () => (dispatch, getState) => {
  const { theme } = getState();
  if (TYPES_MAPPER[theme.type]) {
    dispatch(set({ type: 'darkTheme', bool: false, }));
  } else {
    dispatch(set({ type: 'lightTheme', bool: true, }));
  }
}

export const changeMenu = () => (dispatch, getState) => {
  const { arr } = getState();
  let toggleMenu = arr.toggleMenu;    
  dispatch({ 
    type: SET_ARR, 
    payload: {toggleMenu:!toggleMenu}, 
  });
  
  
}