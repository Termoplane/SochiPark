import React from 'react';


import {
  Container,
  Item,
  Information,
  BoldInf,
  ItemIcon,
  ItemIconInstagram,
  ItemIconVK
} from './styles.js';

class Footer extends React.Component {
  render () {
    return (
      <Container>
        <Item>
          <Information>
            354392, г. Сочи, ул. Континентальный проспект, 6.
            © 2018 - 2019
            Сочи Парк отель
          </Information>
          <Information>
            Сайт является центром бронирования !
          </Information>
        </Item>

        <Item>
          <Information>Звоните С 9 до 21, без выходных</Information>
          <BoldInf href="tel:+79648945660">+7(964)-894-56-60</BoldInf>
        </Item>

        <Item>
          <Information>Пишите по любым вопросам!</Information>
          <BoldInf href="mailto:sochiparkhotel.resort@gmail.com">sochiparkhotel.resort@gmail.com</BoldInf>
        </Item>

        <Item>
          <Information>Наши аккаунты в соц.сетях</Information>

            <ItemIcon>
              <ItemIconInstagram/>
              <ItemIconVK/>
            </ItemIcon>

        </Item>
      </Container>     
    )
  }
}

export default Footer;