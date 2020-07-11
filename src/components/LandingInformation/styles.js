import styled, {css} from '@xstyled/styled-components';
import { breakpoints } from '@xstyled/system'

import beach from '../../images/beach.jpg'

export const Container = styled.div`
  width:100%;
  height: 500px;
  display:flex;
  align-items:center;
  justify-content:center;
`
export const ItemContainer = styled.div(
  breakpoints({
    xs: css`
      width: 100%;
      height: 100%;
      `,
    lg: css`
      width: 100%;
      height: 100%;
    `,
    xl: css`
      width: 50%;
      height: 100%;
    `
  }),
);

export const Item = styled.div`
width:100%;
height: 100%;
display:flex;
`

export const ItemImg = styled.div(
  breakpoints({
    xs: css`
    display:none;
      width: 0%;
      height: 100%;
      background-image:url(${beach});
      background-position: center;
      background-size: cover;
      `,
    md: css`
      display:block;
      width: 60%;
      height: 100%;
      background-image:url(${beach});
      background-position: center;
      background-size: cover;
    `,
  }),
);

export const ItemText = styled.div(
  breakpoints({
    xs: css`
      width:100%;
      height:100%;
      background-image: linear-gradient(to right top, #d16ba5, #c96bb1, #bf6dbd, #b170c8, #a074d3, #9671d9, #8a6fe0, #7a6de7, #7463ec, #6f58f1, #6b4cf5, #673ff8);
      display:flex;
      flex-direction:column;
      justify-content: space-evenly;
      align-items: flex-end;
      `,
    lg: css`
      width:60%;
      height:100%;
      background-image: linear-gradient(to right top, #d16ba5, #c96bb1, #bf6dbd, #b170c8, #a074d3, #9671d9, #8a6fe0, #7a6de7, #7463ec, #6f58f1, #6b4cf5, #673ff8);
      display:flex;
      flex-direction:column;
      justify-content: space-evenly;
      align-items: flex-end;
    `,
    // xl: css`
    //   width:60%;
    //   height:100%;
    //   background-image: linear-gradient(to right top, #d16ba5, #c96bb1, #bf6dbd, #b170c8, #a074d3, #9671d9, #8a6fe0, #7a6de7, #7463ec, #6f58f1, #6b4cf5, #673ff8);
    //   display:flex;
    //   flex-direction:column;
    //   justify-content: space-evenly;
    //   align-items: flex-end;
    // `,
  }),
);

export const ItemTextTitle = styled.h3`

`

export const ItemTextSubTitle = styled.span`
`

export const ItemTextDescription = styled.span`

` 


