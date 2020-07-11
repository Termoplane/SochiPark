import React from 'react';
import PropTypes from 'prop-types';

import {
  ToggleButtonContainer,
  ToggleBlock
} from './styles';


const ThemeToggleButton = ({ isChecked, onClick }) => (
  <ToggleButtonContainer onClick={onClick}>
    <ToggleBlock isChecked={!isChecked} />
  </ToggleButtonContainer>
);

ThemeToggleButton.propTypes = {
  isChecked: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ThemeToggleButton;