import React from 'react';
import Link from 'react-router-dom/Link';
import {
  Container,
  LinksContainer,
  LinksTitle,
  Item,
  Img,
  Title,
  SubTitle,
} from './styles.js';

import spa from './icon/spa.svg'
import tourism from './icon/tourism.svg'
import cooking from './icon/cooking.svg'
import images from './icon/images.svg'
import location from './icon/location.svg'
import comment from './icon/comment.svg'

let arrLinks = [
  {
    img: spa,
    Title: 'SPA - центр',
    SubTitle: 'Текст описания',
    Link:"/SPA",
  },
  {
    img: tourism,
    Title: 'Туры в отель',
    SubTitle: 'Текст описания',
    Link:"/Tour",
  },
  {
    img: cooking,
    Title: 'Питание',
    SubTitle: 'Текст описания',
    Link:"/Food",
  },
  {
    img: images,
    Title: 'Фото',
    SubTitle: 'Текст описания',
    Link:"/Gallery",
  },
  {
    img: location,
    Title: 'Контакты',
    SubTitle: 'Текст описания',
    Link:"/Contact",
  },
  {
    img: comment,
    Title: 'Отзывы',
    SubTitle: 'Текст описания',
    Link:"/Reviews",
  },

]

class LandingLinks extends React.Component {
  render () {
    return (
      <Container>
        <LinksTitle>Изучит у нас </LinksTitle>
        <LinksContainer>

        {arrLinks.map ((item)=> {
          return (
            <Link to={item.Link}>
              <Item>
                <Img background={item.img}/>
                <Title> {item.Title}</Title>
                <SubTitle>{item.SubTitle}</SubTitle>
              </Item>
            </Link>
          )
        })}

        </LinksContainer>
      </Container>     
    )
  }
}

export default LandingLinks;