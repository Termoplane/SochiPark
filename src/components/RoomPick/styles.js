import styled, {css} from '@xstyled/styled-components';
import { breakpoints } from '@xstyled/system'



export const Container = styled.div(
  breakpoints({
    xs: css`
      width: 100%;
      min-height: 70vh;
      margin:auto;
      display:flex;
      flex-wrap:nowrap;
      flex-direction:column; 
    `,
    lg:css`
      width: 100%;
       min-height: 70vh;
      margin:auto;
      display:flex;
      flex-wrap:wrap;
      flex-direction:row;    
      `,
    xl:css`
      width: 100%;
       min-height: 70vh;
      margin:auto;
      display:flex;
      flex-wrap:wrap;
      flex-direction:row;
      `,
    xxl: css`
      width: 80%;
       min-height: 70vh;
      margin:auto;
      display:flex;
      flex-wrap:wrap;
      flex-direction:row;
    `,
  }),
);

export const ItemContainer = styled.div(
  breakpoints({
    xs: css`
      width:100%;
      height: 330px;
    `,
    lg: css`
      width:50%;
      height: 330px;
    `,
    xl:css `
      width:25%;
      height: 330px;
    `,
    xxl: css`
      width:25%;
      height: 330px;
    `,
  }),
);

export const Item = styled.div`
  width:100%;
  height: 100%;
  background-image:${props => `url(${props.background})`};
  background-size:cover;
  background-position:center;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
`

export const ItemDescription = styled.div(
  breakpoints({
    xs: css`
      width:100%;
      height:30%;
      background-color: #2e2e2e93;
      transition: all 250ms;
      display:flex;
      flex-direction:column;
    `,
    xl: css`
      width:100%;
      height:${props => props.open ? '30%' : '20%'};
      background-color: #2e2e2e93;
      transition: all 250ms;
      display:flex;
      flex-direction:column;
    `,
  }),
);

export const ItemDescriptionText = styled.span`
  color:#fff;
  padding-left:5px;
`

export const ButtonContainer = styled.div(
  breakpoints({
    xs: css`
      width:100%;
      height:30px;
      display:flex;
      justify-content:center;
    `,
    xl: css`
    width:100%;
    height:30px;
    display:flex;
    justify-content:center;
    position:relative;
    left: ${props => props.open ? '0px' : '-5000px'};
    `,
  }),
);

export const Button = styled.div(
  breakpoints({
    xs: css`
      width:30%;
      height:100%;
      padding: 5px;
      border-radius: 3px;
      transition: all 250ms;
      background-color: #664bea;
      display:flex;
      justify-content:center;
      align-items:center;
      margin-top: 0px;
      opacity: 1px;
      cursor:pointer;
      color:#fff;
      font-size:15px;
    `,
    xl: css`
      width:30%;
      height:100%;
      padding: 5px;
      border-radius: 3px;
      transition: all 250ms;
      background-color: #664bea;
      display:flex;
      justify-content:center;
      align-items:center;
      margin-top: ${props => props.open ? '0px' : '30px'};
      opacity: ${props => props.open ? '1' : '0'};
      cursor:pointer;
      color:#fff;
      font-size:15px;
      &:hover{
        background-color: #664bea70;
      }
    `,
  }),
);

