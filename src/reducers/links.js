import { SET_LINKS } from '../constants';

import spa from '../images/icon/links/spa.svg'
// import SPA from '../../images/icon/links/spa.svg'
// import SPA from '../../images/icon/links/spa.svg'
// import SPA from '../../images/icon/links/spa.svg'
// import SPA from '../../images/icon/links/spa.svg'
// import SPA from '../../images/icon/links/spa.svg'

const initialState = {
  menu: [
    {
      title: "SPA - центр",
      icon : spa,
      titleDescription: "Текст описание",
      subTitle: ['текс', 'текст', 'текст', 'текст'],
      link: 'ссылка'
    },
    {
      title: "Туры в отель",
      titleDescription: "Текст описание",
      subTitle: ['текс', 'текст', 'текст', 'текст'],
      link: 'ссылка'
    },
    {
      title: "Питание",
      titleDescription: "Текст описание",
      subTitle: ['текс', 'текст', 'текст', 'текст'],
      link: 'ссылка'
    },
    {
      title: "Фото",
      titleDescription: "Текст описание",
      subTitle: ['текс', 'текст', 'текст', 'текст'],
      link: 'ссылка'
    },
    {
      title: "Контакты",
      titleDescription: "Текст описание",
      subTitle: ['текс', 'текст', 'текст', 'текст'],
      link: 'ссылка'
    },
    {
      title: "Отзывы",
      titleDescription: "Текст описание",
      subTitle: ['текс', 'текст', 'текст', 'текст'],
      link: 'ссылка'
    },
  ],
};

const links = (state = initialState, action) => {
  switch (action.type) {
    case SET_LINKS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
};

export default links;