import { SET_ARR } from '../constants';

import {
  standartRoom,
  standartRoom1,
  standartRoom2,
} from '../images/rooms/standart_Room_Odnomestni';

import {
  standart_doubleTwo,
  standart_doubleTwo1,
  standart_doubleTwoBathroom,
} from '../images/rooms/standrt_double_2';

import {
  standart_double,
  standart_double1,
} from '../images/rooms/standrt_double_1';

import {
  standart_double_addPlace,
  standart_double_addPlace1
} from '../images/rooms/standrt_double_1_Plus_addPlace';

import {
  standart_doubleTwoAdd,
  standart_doubleTwoAdd1,
} from '../images/rooms/standrt_double_2_Plus_addPlace';

import {
  doubleRoomLuxe,
  doubleRoomLuxe1,
  doubleRoomLuxe2,
  doubleRoomLuxe3,
  doubleRoomLuxe4,
  doubleRoomLuxe6,
} from '../images/rooms/luxe_double';

import {
  thirdLuxe,
  thirdLuxe1,
  thirdLuxe2,
  thirdLuxe3,
  LuxeBathroom,
  LuxeBathroom1,
  TerraceLuxe,
} from '../images/rooms/luxe_third';

import {
  mgn1,
  mgn2,
  mgn3,
} from '../images/rooms/ForDisabled';


const initialState = {
  // Кнопка переключения 
  toggleMenu: false,
  
  // Комнаты
  menu: [
    {
      title: "Об отеле",
      subTitle: ['текс', 'текст', 'текст', 'текст'],
      link: 'ссылка'
    },
    {
      title: "Для детей",
      subTitle: ['текс', 'текст', 'текст', 'текст'],
      link: 'ссылка'
    },
    {
      title: "Услуги",
      subTitle: ['текс', 'текст', 'текст', 'текст'],
      link: 'ссылка'
    },
    {
      title: "Туры",
      subTitle: ['текс', 'текст', 'текст', 'текст'],
      link: 'ссылка'
    },
  ],
  room: [
    {
      title: 'Одноместный стандарт',
      price: '980 ₽',
      background: standartRoom1,
    },
    {
      title: '2-ух местный стандарт с 2 кроватями',
      price: '980 ₽',
      background: standart_doubleTwo,
    },
    {
      title: '2-х местный стандарт с 1 кроватью',
      price: '980 ₽',
      background: standart_double,
    },
    {
      title: '2-х местный стандарт с 1 кроватью + доп. место',
      price: '980 ₽',
      background: standart_double_addPlace1,
    },
    {
      title: '2-х местный стандарт с 2 кроватями + доп. место',
      price: '980 ₽',
      background: standart_doubleTwoAdd1,
    },
    {
      title: 'Люкс 2х-комнтантый',
      price: '980 ₽',
      background: doubleRoomLuxe,
    },
    {
      title: 'Люкс 3х-комнтантый супериор',
      price: '980 ₽',
      background: thirdLuxe1,
    },
    {
      title: 'Номер МГН (маломобильные группы населения)',
      price: '980 ₽',
      background: mgn3,
    },
  ],
};

const arr = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARR:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
};

export default arr;