import styled, {css} from '@xstyled/styled-components';
import { breakpoints } from '@xstyled/system';

export const Container = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;

  background-image: linear-gradient(to bottom, #edefff, #ebeeff, #e9edff, #e6edff, #e4ecff, #e2ebff, #e1eaff, #dfe9ff, #dfe8ff, #dee7ff, #dee5ff, #dee4ff);
`

export const Item = styled.div`
  margin-top:150px;
`

export const ItemMargin = styled.div`
  margin-bottom:50px;
`

export const Title = styled.h1`
text-align:center;

`

export const SubTitle = styled.div`
  text-align:center;
  margin-bottom:50px;
  font-weight:600;
  font-size:18px;
`
export const Sub = styled.div`
  font-weight: 600;
  padding-bottom: 15px;
  font-size: 18px;
`

export const Description = styled.div`
  width: 50%;
  padding: 5px;
  font-size: 17px;
  margin: auto;
  margin-bottom: 50px;
  ${breakpoints({
    xs: css`
    width:100%;
    `,
    lg: css`
      width:50%;
    `
  })}
`

export const ContainerPhoto = styled.div`
  margin:auto;
  margin-bottom:100px;
  ${breakpoints({
    xs: css`
    width:100%;
    `,
    lg: css`
      width:60%;
    `
  })}
`