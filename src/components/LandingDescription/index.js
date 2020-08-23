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
            <TextSub>🏝️ Почему выбирают нас </TextSub>

            <TextTitie>• Собственный пляж отеля всего в 5 минутах ходьбы</TextTitie>
            <TextTitie>• Кухня всех народов мира в 8 ресторанах и кафе</TextTitie>
            <TextTitie>• Можно заняться спортом: 5 открытых бассейнов, тренажерный зал, теннисные корты, аренда велосипедов и спортинвентаря</TextTitie>
            <TextTitie>• Детский клуб «Пойдем играть» и развлечения для детей под присмотром аниматоров и нянь</TextTitie>
            <TextTitie>• SPA-центр и массажный кабинет. Утренняя гимнастика, пилатес, йога и аквааэробика</TextTitie>
            <TextTitie>• Отличное расположение и близость до главных достопримечательностей города, тематического парка развлечений «Сочи парк» и Олимпийского парка</TextTitie>
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