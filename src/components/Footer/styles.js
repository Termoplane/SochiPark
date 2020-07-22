import styled, {css} from '@xstyled/styled-components';
import { breakpoints } from '@xstyled/system';

export const Container = styled.div`
margin-top:100px;
width:100%;
height:250px;
display:flex;
align-items:center;
justify-content:space-around;
`

export const Item = styled.div`
display:flex;
flex-direction:column;
font-size:15px;
`

export const Information = styled.div`
padding:5px;
`

export const BoldInf = styled.div`
padding:5px;
font-weight:600;
`