import styled, {css} from '@xstyled/styled-components';
import { breakpoints } from '@xstyled/system';

import vacation from '../../images/vacation.jpg';

export const Container = styled.div`
  width:100%;
  height: 400px;
`

export const ItemContainer = styled.div(
  breakpoints({
    xs: css`
      width:100%;
      height:100%;
      margin:auto;
      display:flex;
      flex-direction:column;
      `,
    lg: css`
      width:80%;
      flex-direction:row;
      `,
    xl: css`
      width:50%;
      flex-direction:row;
    `,
  }),
);

export const ItemText = styled.div(
  breakpoints({
    xs: css`
      width:100%;
      height:100%;
      display:flex;
      flex-direction:column;
      justify-content:space-evenly;
      align-items:center;
      `,
      lg: css`
      align-items:flex-start;
      `,
  }),
);

export const TextSub = styled.div`
  font-size:15px;
`

export const TextTitie = styled.div`
  font-weight:600;
`

export const TextDescription = styled.div``


export const ItemRight = styled.div(
  breakpoints({
    xs: css`
      width:100%;
      height:100%;
      display:flex;
      justify-content:center;
      align-items:center;
      `,
      lg: css`
      justify-content:flex-end;
      `,
  }),
);

export const ItemBackground = styled.div(
  breakpoints({
    xs: css`
        width: 300px;
        height: 175px;
        position:absolute;
        margin-left: 15px;
        background-image: linear-gradient(to right top, #d16ba5, #c96bb1, #bf6dbd, #b170c8, #a074d3, #9671d9, #8a6fe0, #7a6de7, #7463ec, #6f58f1, #6b4cf5, #673ff8);
      `,
    md: css`
        width: 320px;
        height: 190px;
        margin-left:30px;
    `,
      lg: css`
        width: 460px;
        height: 290px;
      `,
  }),
);

export const ItemImage = styled.div(
  breakpoints({
    xs: css`
      width: 300px;
      height: 165px;
      margin-top: 35px;
      background-position: center;
      position: relative;
      background-size:cover;
      background-image: url('${vacation}');
      `,
    md: css`
      width: 330px;
      height: 180px;
      margin-left: 30px;
    `,
    lg: css`
      width: 430px;
      height: 280px;
    `,
  }),
);