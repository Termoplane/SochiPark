import React from 'react';

import {
  Container,
  ItemContainer,
  ItemText,
  TextSub,
  TextTitie,
  TextDescription,
  ItemRight,
  ItemBackground,
  ItemImage,
} from './styles.js';

class LandingDescription extends React.Component {
  render () {
    return (
      <Container>
        <ItemContainer>
          <ItemText>
            <TextSub>🏝️ Экслюзивные</TextSub>
            <TextTitie>Текст крупнее</TextTitie>
            <TextDescription>Текс мельче (описание)</TextDescription>
          </ItemText>
          <ItemRight>
            <ItemBackground/>
            <ItemImage/>
          </ItemRight>
        </ItemContainer>
      </Container>     
    )
  }
}

export default LandingDescription;