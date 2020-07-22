import styled, {css} from '@xstyled/styled-components';
import { breakpoints } from '@xstyled/system';

import beach from './icon/beach.svg'

export const Container = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  background-image: linear-gradient(to bottom, #edefff, #ebeeff, #e9edff, #e6edff, #e4ecff, #e2ebff, #e1eaff, #dfe9ff, #dfe8ff, #dee7ff, #dee5ff, #dee4ff);
`

export const Item = styled.div`
margin-top:150px;
`

export const Island = styled.div`
background-image: url(${beach});
width:50px;
height:50px;
background-size:cover;
`

export const Title = styled.h1`
display:flex;
`

export const Description = styled.h2`

`