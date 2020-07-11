import styled, {css} from '@xstyled/styled-components';
import { breakpoints } from '@xstyled/system' 
import logo from '../../images/logo.png'
import call from '../../images/icon/call.svg'

export const Container = styled.div`
width:100%;
height:10vh;
position:absolute;
`

export const Header = styled.header`
width:100%;
height:95px;
background-color: rgba(0, 6, 20, 0.52);
display:flex;
justify-content:space-around;
align-items:center;
position:fixed;
z-index:2;
`

export const Logo = styled.div`
width:200px;
height:80px;
background-image:url(${logo});
background-size:cover;
`

export const Number = styled.div(
  breakpoints({
    xs: css`
      display:none;
      color:${props => props.show ? '#fff' : '#000' };
      `,
    xxl: css`
      font-size:17px;
      display:block;
      color:${props => props.show ? '#fff' : '#000' };
    `,
  }),
);
  
  export const NumberIcon = styled.div(
    breakpoints({
    xs: css`
      background-image:url(${call});
      width:35px;
      height:35px;
      display:block;
    `,
    xxl: css`
      display:none;
    `,
  }),
);

export const Menu = styled.div`
width:100%;
height:100vh;
background-color: rgba(0, 0, 0, 0.97);
position:fixed;
display: ${props => props.show ? 'flex' : 'none'};
align-items:center;
z-index:2;
`

export const MenuContainer = styled.div`
width:70%;
height:40vh;
display:flex;
justify-content:space-around;
align-items:center;
margin:auto;
`

export const MenuItem = styled.div`
display:flex;
flex-direction:column;
`

export const MenuItemList = styled.div`
padding:5px;
color:#fff;
font-size:19px;
`

export const MenuItemTitle = styled.h2`
color:#fff;
letter-spacing: 1px;
`

