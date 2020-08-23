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
              <ItemTextTitle>Добро пожаловать в Отель Сочи Парк</ItemTextTitle>
              <ItemTextSubTitle>Крупный курортный комплекс, состоящий из нескольких корпусов европейского уровня. Большая территория со своей мини инфраструктурой, местами отдыха и развлечений.</ItemTextSubTitle>
              <ItemTextDescription>Наш сайт является официальным представителем тур.оператора БиблиоГлобус</ItemTextDescription>
            </ItemText> 
          </Item>
        </ItemContainer>
      </Container>     
    )
  }
}

export default LandingInformation;