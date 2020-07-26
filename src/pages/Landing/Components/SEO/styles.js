import styled, {css} from '@xstyled/styled-components';
import { breakpoints } from '@xstyled/system';

export const Container = styled.div`
width:100%;
margin-top:100px;
`

export const Item = styled.div`
margin:auto;
padding:10px;
${breakpoints({
  xs: css`
  witdth:100%;
  `,
  lg: css`
  width:80%;
  `,
  xl: css`
  width:50%;
  `,
    })}
`

export const Title = styled.h1`
 
`

export const SubTitle = styled.p`
`