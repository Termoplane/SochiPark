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
      id:'1',
      title: 'Одноместный стандарт',
      price: '980 ₽',
      background: standartRoom1,
      description: 'Площадь номера 20 кв.м, функциональная мебель, спальное место 140*200 см, фен, холодильник, чайник, центральная система кондиционирования, ЖК- телевизор со спутниковым телевидением, телефон, балкон, электронный замок, душ',
      photos: [
        {
          src:standartRoom,
          width: 4,
          height: 3
        },
        {
          src:standartRoom1,
          width: 4,
          height: 3,
        },
        {
          src:standartRoom2,
          width: 4,
          height: 3
        },
      ]
    },
    {
      id:'2',
      title: '2-ух местный стандарт с 2 кроватями',
      price: '980 ₽',
      background: standart_doubleTwo,
      description: 'Площадь номера 20 кв.м, две отдельно стоящие односпальные кровати 90*200 см, функциональная мебель, фен, холодильник, чайник, центральная система кондиционирования, ЖК- телевизор со спутниковым телевидением, телефон, балкон, современная душевая кабина или ванна, электронный замок.',
      photos: [
        {
          src:standart_doubleTwo,
          width: 4,
          height: 3
        },
        {
          src:standart_doubleTwo1,
          width: 4,
          height: 3,
        },
        {
          src:standart_doubleTwoBathroom,
          width: 4,
          height: 3
        },
      ]
    },
    {
      id:'3',
      title: '2-х местный стандарт с 1 кроватью',
      price: '980 ₽',
      background: standart_double,
      description: 'Площадь номера 20 кв.м, одна кровать для двухместного размещения 140*200, функциональная мебель, фен, холодильник, чайник, центральная система кондиционирования , ЖК- телевизор со спутниковым телевидением , телефон , балкон, современная душевая кабина или ванна, электронный замок',
      photos: [
        {
          src:standart_double,
          width: 4,
          height: 3
        },
        {
          src:standart_double1,
          width: 4,
          height: 3,
        },
      ]
    },
    {
      id:'4',
      title: '2-х местный стандарт с 1 кроватью + доп. место',
      price: '980 ₽',
      background: standart_double_addPlace1,
      description:'Площадь номера 20 кв.м, две отдельно стоящие односпальные кровати 90*200 см, функциональная мебель, фен, холодильник, чайник, центральная система кондиционирования, ЖК- телевизор со спутниковым телевидением, телефон, балкон, современная душевая кабина или ванна, электронный замок. Размер дополнительного спального места 70*160',
      photos : [
        {
          src:standart_double_addPlace,
          width: 4,
          height: 3
        },
        {
          src:standart_double_addPlace1,
          width: 4,
          height: 3,
        },
      ]
    },
    {
      id:'5',
      title: '2-х местный стандарт с 2 кроватями + доп. место',
      price: '980 ₽',
      background: standart_doubleTwoAdd1,
      description:'Площадь номера 20 кв.м, две отдельно стоящие односпальные кровати 90*200 см, функциональная мебель, фен, холодильник, чайник, центральная система кондиционирования, ЖК- телевизор со спутниковым телевидением, телефон, балкон, современная душевая кабина или ванна, электронный замок. Размер дополнительного спального места 70*160',
      photos: [
        {
          src:standart_doubleTwoAdd,
          width: 4,
          height: 3
        },
        {
          src:standart_doubleTwoAdd1,
          width: 4,
          height: 3,
        },
      ]
    },
    {
      id:'6',
      title: 'Люкс 2х-комнтантый',
      price: '980 ₽',
      background: doubleRoomLuxe,
      description:'Площадь номера 40 кв.м, две комнаты, в спальне две отдельные односпальные кровати или одна двуспальная кровать, фен, функциональная мебель, диван (размер спального места 2.05 см*160 см), центральная система кондиционирования, холодильник, чайник, ЖК-телевизор со спутниковым телевидением, телефон, балкон, современная ванна, электронный замок. Пластиковая мебель на балконе',
      photos: [
        {
          src:doubleRoomLuxe,
          width: 4,
          height: 3
        },
        {
          src:doubleRoomLuxe1,
          width: 4,
          height: 3,
        },
        {
          src:doubleRoomLuxe2,
          width: 4,
          height: 3,
        },
        {
          src:doubleRoomLuxe3,
          width: 4,
          height: 3,
        },
        {
          src:doubleRoomLuxe4,
          width: 4,
          height: 3,
        },
        {
          src:doubleRoomLuxe6,
          width: 4,
          height: 3,
        },
      ]
    },
    {
      id:'7',
      title: 'Люкс 3х-комнтантый супериор',
      price: '980 ₽',
      background: thirdLuxe1,
      description:'Площадь номера 60 кв.м, три комнаты, 1-я спальня (две раздельные кровати ), 2-я спальня (две раздельные кровати или одна двуспальная кровать ), фен, холодильник, чайник, функциональная мебель, удобное рабочее место, диван (размер спального места 160 см*2.05 см), центральная система кондиционирования, ЖК- телевизор со спутниковым телевидением, телефон, балкон, современная ванна. Пластиковая мебель на балконе',
      photos: [
        {
          src:thirdLuxe,
          width: 4,
          height: 3
        },
        {
          src:thirdLuxe1,
          width: 4,
          height: 3,
        },
        {
          src:thirdLuxe2,
          width: 4,
          height: 3,
        },
        {
          src:thirdLuxe3,
          width: 4,
          height: 3,
        },
        {
          src:LuxeBathroom,
          width: 4,
          height: 3,
        },
        {
          src:LuxeBathroom1,
          width: 4,
          height: 3,
        },
        {
          src:TerraceLuxe,
          width: 4,
          height: 3,
        },
      ]
    },
    {
      id:'8',
      title: 'Номер МГН (маломобильные группы населения)',
      price: '980 ₽',
      background: mgn3,
      description:'Площадь номера 20 кв.м, функциональная мебель, центральная система кондиционирования, фен, холодильник, чайник, ЖК-телевизор со спутниковым телевидением, телефон, балкон, ванная комната оборудована поручнями, электронный замок',
      photos: [
        {
          src:mgn1,
          width: 4,
          height: 3
        },
        {
          src:mgn2,
          width: 4,
          height: 3,
        },
        {
          src:mgn3,
          width: 4,
          height: 3,
        },
      ]
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