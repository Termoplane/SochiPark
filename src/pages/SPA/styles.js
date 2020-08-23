import styled, {css} from '@xstyled/styled-components';
import { breakpoints } from '@xstyled/system';


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
${breakpoints({
    xs: css`
    width: 100%;
    `,
    xxl: css`
    width: 75%;
    `
  })}
`

export const Title = styled.h2`
padding-top:50px;
`

export const List = styled.div`
padding:10px;
`

export const Icon = styled.div`
  /* background-image: ${props => url(`${props.icon}`)}; */
  width:30px;
  height:30px;
  background-size:cover;
`
