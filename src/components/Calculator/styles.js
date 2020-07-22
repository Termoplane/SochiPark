import styled, {css} from '@xstyled/styled-components';
import { breakpoints } from '@xstyled/system';

export const MainContainer = styled.div`
box-sizing: border-box;
display: block;
font-family: 'Geometria'!important;
font-size: 16px!important;
margin-right: 2vw;
margin-left: 2vw;
margin-top:2vh;
margin-bottom: 2vh;
`
export const Container = styled.div`
display: flex;
flex-wrap: wrap;
margin-right: -15px;
margin-left: -15px;
justify-content:center;
`

export const InputContainer = styled.div(
  breakpoints({
    xs: css`
      flex: 0 0 100%;
      position: relative;
      width: 100%;
      min-height: 1px;
      padding-right: 15px;
      padding-left: 15px;
      display: block;
    `,
    lg: css`
      flex: 0 0 50%;
      padding-right: 15px;
      padding-left: 15px;
      max-width:100%;
      position: relative;
      width: 100%;
      min-height: 1px;
      display: block;
    `,
  }),
);



export const Results = styled.div`
margin-right: -15px;
margin-left: -15px;
justify-content:center;
`

export const ResultItem = styled.div`
display:flex;
padding:25px;
border-bottom: 2px dashed #fff;
box-sizing: border-box;
`
//export const Select = styled.