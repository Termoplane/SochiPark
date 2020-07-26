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

export const Title = styled.h1``

export const SubTitle = styled.div`
padding:5px;
font-size:16px;
`