import styled, {css} from '@xstyled/styled-components';
import { breakpoints } from '@xstyled/system';

export const Container = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  background-image: linear-gradient(to bottom, #edefff, #ebeeff, #e9edff, #e6edff, #e4ecff, #e2ebff, #e1eaff, #dfe9ff, #dfe8ff, #dee7ff, #dee5ff, #dee4ff);
  `;

export const FormContainer = styled.div`
margin:auto;
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