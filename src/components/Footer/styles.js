import styled, {css} from '@xstyled/styled-components';
import { breakpoints } from '@xstyled/system';

import Instagram from './instagram.svg'
import VK from './vk.svg'

export const Container = styled.div`
margin-top:100px;
width:100%;

display:flex;
justify-content:space-around;
${breakpoints({
  xs: css`
      flex-direction:column;
      align-items:flex-start;
      height:auto;
      `,
      lg: css`
      align-items:center;
      flex-direction:row;
      height:250px;
      `,
    })}
`

export const Item = styled.div`
display:flex;
flex-direction:column;
font-size:15px;
`

export const Information = styled.div`
padding:5px;
`

export const BoldInf = styled.a`
padding:5px;
font-weight:600;
`

export const ItemIcon = styled.div`
display:flex;
justify-content:space-evenly;
`

export const ItemIconVK = styled.div`
background-image: url(${VK});
width:30px;
height:30px;
background-size:cover;
`
export const ItemIconInstagram = styled.div`
background-image: url(${Instagram});
width:30px;
height:30px;
background-size:cover;
`