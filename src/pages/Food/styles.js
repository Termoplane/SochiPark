import styled, {css} from '@xstyled/styled-components';
import { breakpoints } from '@xstyled/system';

export const Container = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  background-image: linear-gradient(to bottom, #edefff, #ebeeff, #e9edff, #e6edff, #e4ecff, #e2ebff, #e1eaff, #dfe9ff, #dfe8ff, #dee7ff, #dee5ff, #dee4ff);
`

export const Item = styled.div`
display:flex;
flex-direction:column;
margin-top:150px;
margin-left:25px;
`

export const Title = styled.h1``

export const SubTitle = styled.div`
padding:15px;
font-size:17px;
`
export const ListElement = styled.li`

`
export const Name = styled.div`
font-weight:600;
font-size:21px;
`
export const Text = styled.span`
padding:5px;
`
