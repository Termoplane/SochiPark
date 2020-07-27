import styled, {css} from '@xstyled/styled-components';
import { breakpoints } from '@xstyled/system';

export const MainContainer = styled.div`
box-sizing: border-box;
display: block;
font-size: 16px;
width:100%;
margin-bottom:100px;
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
justify-content:center;
`

export const ResultItem = styled.div`
display:flex;
padding:25px;
border-bottom: 2px dashed #fff;
box-sizing: border-box;
margin-bottom:25px;
`

export const Title = styled.h2`
margin-bottom:25px;
text-align:center;
font-size:26px;
`

export const ResultSubTitle = styled.h3`
  padding-top: 40px;
  text-align: center;
  margin-bottom: .5rem;
`

export const Label = styled.label`
  padding-top: 10px;
  display: inline-block;
  margin-bottom: .5rem;
  text-transform: uppercase;
  font-size: 12px;
`

export const BookingButton = styled.div`
  width:150px;
  padding:5px;
  background-color: #36a5f3;
  color: #fff;
  &:hover{
    background-color: #2180c3;
  }
`
//export const Select = styled.