import React from 'react';

import {
  Container,
  ItemContainer,
  Item,
  ItemImg,
  ItemText,
  ItemTextTitle,
  ItemTextSubTitle,
  ItemTextDescription
} from './styles.js';

class LandingInformation extends React.Component {
  render () {
    return (
      <Container>
        <ItemContainer>
          <Item>
           <ItemImg/>
            <ItemText>
              <ItemTextTitle>Добро пожаловать</ItemTextTitle>
              <ItemTextSubTitle>Жирный текст</ItemTextSubTitle>
              <ItemTextDescription>Мелкий текст</ItemTextDescription>
            </ItemText> 
          </Item>
        </ItemContainer>
      </Container>     
    )
  }
}

export default LandingInformation;