import styled from '@xstyled/styled-components';

import iconMenuOpen from '../../images/icon/menu.svg'
import iconMenuClose from '../../images/icon/close.svg'

export const Button = styled.div`
width: 30px;
height: 30px;
background-size:cover;
z-index: 2;
cursor: pointer;
background-image: ${(props) => props.toggleMenu ? `url(${iconMenuClose})` : `url(${iconMenuOpen})`};
`