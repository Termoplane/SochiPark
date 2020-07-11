import styled from '@xstyled/styled-components';

export const ToggleButtonContainer = styled.div`
  display: flex;
  align-items: center;
  height: 22px;
  width: 40px;
  background-color: backgroundColor200;
  border-radius: 20px; 
  border: 4px solid;
  border-color: borderColor300;
  transition: 350ms ease-in;
  cursor: pointer;
`;

export const ToggleBlock = styled.div`
  position: relative;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => !props.isChecked ? '#F5EC59' : '#FFFDF2'};
  border: 4px solid;
  border-color: ${(props) => !props.isChecked ? '#E7C65C' : '#DEE2C6' };
  transition: 350ms ease-in;
  left: ${(props) => props.isChecked ? 'calc(100% - 12px)' : '0px'};
`;