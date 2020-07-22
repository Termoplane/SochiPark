import React from 'react';

import {
  Container,
  Item,
  Information,
  BoldInf,
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
          <BoldInf>+7(964)-894-56-60</BoldInf>
        </Item>

        <Item>
          <Information>Пишите по любым вопросам!</Information>
          <BoldInf>sochiparkhotel.resort@gmail.com</BoldInf>
          <Information>Способы оплаты</Information>
        </Item>

        <Item>
          <Information>Наши аккаунты в соц.сетях</Information>
        </Item>
      </Container>     
    )
  }
}

export default Footer;