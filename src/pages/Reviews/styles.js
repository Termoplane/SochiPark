import styled, {css} from '@xstyled/styled-components';
import { breakpoints } from '@xstyled/system';
import { Card, Avatar } from 'antd';
export const Container = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  background-image: linear-gradient(to bottom, #edefff, #ebeeff, #e9edff, #e6edff, #e4ecff, #e2ebff, #e1eaff, #dfe9ff, #dfe8ff, #dee7ff, #dee5ff, #dee4ff);
`

export const Item = styled.div`
  margin-top:150px;
`

export const ItemCard = styled(Card)`

${breakpoints({
      xs: css`
        margin:auto!important;
        margin-bottom:25px!important;
      `,
      xl: css`
        margin:25px!important;
      `
    })}
`

export const Link = styled.a`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  padding-top: 25px;

`