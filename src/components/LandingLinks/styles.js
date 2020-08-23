import styled, {css} from '@xstyled/styled-components';
import { breakpoints } from '@xstyled/system';


export const Container = styled.div`
    width:100%;
    height: 400px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
  ${breakpoints({
    xs: css`
    height: auto;
    margin-top:140px;
    `,
    lg: css`
    margin-top:unset;
    height: 400px;
    `
  })}
`

export const LinksContainer = styled.div`
  display:flex;
  justify-content: space-around;
  flex-wrap: wrap;
  ${breakpoints({
    xs: css`
    width:100%;
    `,
    xxl: css`
      width:50%;
    `
  })}
`
export const LinksTitle = styled.h2`
font-size:20px;
`
export const Item = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  ${breakpoints({
    xs: css`
    padding:15px;
    width:150px;
    `,
    xxl: css`
    width:250px;
    padding:30px;
    `
  })}
  
`

export const Img = styled.div`
background-image: ${props => `url(${props.background})` };
width:40px;
height:40px;
transition: transform 500ms;
margin-bottom:15px;
background-size:cover;
&:hover {
  transform: rotate(360deg)
}
`

export const Title = styled.h3``

export const SubTitle = styled.h4``