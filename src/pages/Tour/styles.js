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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Island = styled.div`
  background-image: url(${beach});
  width:50px;
  height:50px;
  background-size:cover;
`

export const Title = styled.h1`
  display:flex;
  font-weight:600;
  ${breakpoints({
    sm: css`
    font-size:18px;
    `,
    md: css`
    font-size:22px;
    `,
  })}
`

export const Description = styled.h2`
${breakpoints({
    sm: css`
    font-size: 16px;
    padding-top: 25px;
    `,
    md: css`
    font-size:20px;
    `,
  })}
`

export const FormContainer = styled.div`
margin:auto;
margin-top:50px;
${breakpoints({
    xs: css`
    width:100%;
    padding:60px;
    `,
    lg: css`
    padding:0px;
    width:25%;
    `,
  })}
`

export const TextDescription = styled.p`

`