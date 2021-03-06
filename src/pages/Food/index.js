import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ThemeActions from '../../actions/themeActions';
import { Anchor,Descriptions, Badge,Row,Col } from 'antd';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Calculator from '../../components/Calculator';
import Photo from '../../components/Photo'

import bamboo from './images/compress/bamboo.jpg'
import Basilico from './images/compress/Basilico.jpg'
import BonAppeti from './images/compress/BonAppeti.jpg'
import bruderschaft from './images/compress/bruderschaft.jpg'
import domashnij from './images/compress/domashnij.jpg'
import GrafOrlov from './images/compress/GrafOrlov.jpg'
import lobbi from './images/compress/lobbi.jpg'
import malina from './images/compress/malina.jpg'
import troeVLodke from './images/compress/troeVLodke.jpg'


import { 
  Container, 
  Item,
  Title,
  SubTitle,
  ListElement,
  Name,
  Text,
  
} from './styles';

const photos = [
  {
    src: bamboo,
    width: 4,
    height: 3
  },
  {
    src: Basilico,
    width: 1,
    height: 1
  },
  {
    src: BonAppeti,
    width: 3,
    height: 4
  },
  {
    src: bruderschaft,
    width: 3,
    height: 4
  },
  {
    src: domashnij,
    width: 3,
    height: 4
  },
  {
    src: GrafOrlov,
    width: 4,
    height: 3
  },
  {
    src: lobbi,
    width: 3,
    height: 4
  },
  {
    src: malina,
    width: 4,
    height: 3
  },
  {
    src: troeVLodke,
    width: 4,
    height: 3
  }
];

class Food extends React.Component {
  constructor(props){
    super(props)         
  }
  
  handleClick = () => {
    this.props.ThemeActions.changeMenu();
  }

  render() {
    const {room, toggleMenu} = this.props.arr    
    const {menu} = this.props.links
      return (
        <>
        <Navbar onClick={this.handleClick} toggleMenu={toggleMenu} arr={menu}/>

      <Container>
        <Item>
          <Title>Сочи Парк Отель — Питание</Title>
          <SubTitle>Отель предоставляет 5 типов питания:</SubTitle>
            <ListElement>без питания (не всегда доступен, только в определенные периоды);</ListElement>
            <ListElement>завтрак;</ListElement>
            <ListElement>завтрак+ужин;</ListElement>
            <ListElement>завтрак+обед;</ListElement>
            <ListElement>завтрак+обед+ужин.</ListElement>
          <SubTitle>На территории отеля есть множество заведений питания:</SubTitle>
          
          <Name>Bruderschaft </Name>
          <Text>ресторан европейской кухни, работает ежедневно с 7:00 до 22:00, с перерывами на сервировку с 11:00 до 13:00 и с 15:00 до 18:00.</Text>
          <Text>Для гостей, проживающих в 8-12 корпусах, питание по системе шведский стол предоставляется в следующие отрезки времени:</Text>
          <ListElement>завтрак с 7:00 до 11:00</ListElement>
          <ListElement>обед с 13:00 до 15:00</ListElement>
          <ListElement>ужин с 17:00 до 21:00</ListElement>
          <Text>В ресторане два этажа. Для кормления детей предоставляются детские стульчики. Есть парковка для детских колясок и велосипедов;</Text>
          
          <Name>Bon Appeti </Name>
          <Text>ресторан европейской кухни, завтрак, обед и ужин для гостей проживающих в 1-7 корпусах, соответственно с 7:00 до 11:00, с 13:00 до 15:00 и с 17:00 до 21:00;</Text>
          <SubTitle>При оплате на месте завтрак/обед/ужин в ресторанах «Bruderschaft»  и «Bon Appeti»  и по 300 рублей с человека.</SubTitle>
          
          <Name>Бар «Welcome»</Name>
          <Text>традиционные завтраки, расположен в 10 корпусе, режим работы: с 08:00 до 24:00.</Text>
          
          <Name>Граф Орлов</Name>
          <Text>уютный ресторан русской кухни, режим работы: 13:00 — 01:00. Средний чек на одного гостя составит примерно 700 рублей;</Text>
          
          <Name>El Basilico</Name>
          <Text>ресторан итальянской кухни, режим работы: 11:00 — 23:00. Средний чек на одного составит примерно 600 рублей.</Text>
          <ListElement>кафе, расположенных вдоль центральной аллеи:</ListElement>
          
          <Name>Galaxy </Name>
          <Text>японская кухня (роллы, суши, алкогольные напитки, безалкогольные напитки), работает ежедневно с 12:00-24:00). Распологается по прогулочный аллее.</Text>
          
          <Name>Кафе Bamboo bar</Name>
          <Text>кавказская кухня (осетинские пироги и соусы, хинкали, алкогольные напитки, шашлык на мангале, плов, безалкогольные напитки, кальян), работает с 12:00 до 00:00 ежедневно;</Text>
          <Text>Акция! При покупке от 3-х хинкали — соус Цахтон в подарок. При покупке от 7 хинкали в подарок соус Цахтон и бокал вина «солнце Юга».</Text>
          
          <Name>Малина </Name>
          <Text> кондитерская (десерты, блины, шоколад, коктейли, смузи, домашние лимонады, глинтвейны, алкогольные напитки), работает с 10:00 до 22:00. Средний чек на одного гостя составит примерно 300 рублей;  Располагается на по прогулочный аллее.</Text>
          
          <Name>Кафе «Чебуреки и вино»</Name>
          <Text>сочные чебуреки со свежайшей начинкой, широкий ассортимент вин. находится рядом с велопрокатом Режим работы с 10:00 до 22:00*.</Text>
          
          <Name>Кафе «Домашний погребок»</Name>
          <Text>Пельмени и вареники ручной лепки, винные дегустации, располагается в 5 корпусе. Режим работы: с 08:00 до 01:00*, кухня с 10:00 до 22:00.</Text>
          
          <Name>Lounge Cafe Шатер</Name>
          <Text>закуски, напитки, кальян, анимация, работает в летний период.</Text>
          <Text>Также к Вашим услугам Служба по доставке еды и напитков (пицца, паста, сэндвичи и т.д.). Режим работы с 18:00 — 06:00. Добавочный номер 2488.</Text>
          <Text>Служба доставки еды японской кухни (роллы, суши, напитки) в номера. Режим работы с 11:00 – 23:00. Добавочный номер 2581.</Text>
          <ListElement>баров:</ListElement>

          <Name>Трое в лодке</Name>
          <Text>работает с 21-00 до 6-00, различные тематические программы ежедневно: по пятницам с 21:00 до 23:00 шоу-программа «Тайны востока» — наш восточный гость откроет Вам удивительный мир с индийскими, китайскими, египетскими и арабскими номерами, артисты в красочных костюмах продемонстрируют всю красоту и магию востока. Вас ждут 12 сказочных номеров, конкурсы и интерактивы, по субботам — «Латинская ночь» (танец живота, мужской и женский стриптиз, женский вокал, MC, дискотека, конкурсы и подарки). Каждое воскресенье — театрализованное шоу «Кавказское застолье» (блюда кавказской кухни, тамада, выступления ансамбля кавказского танца, мастер-классы). Бар находится слева от ресторана «Брудершафт».</Text>
        
          <Name>Бар «№17»</Name>
          <Text>гриль-меню, раки и креветки, закуски, снеки, напитки, кальян, работает с 13:00 до 01:00 (с 18:00 до 6:00 в летний период). В баре проходят трансляции спортивных соревнований. Расположен по прогулочный аллее.</Text>
          
          <Name>Lobby bar</Name>
          <Text>напитки, закуски, работает круглосуточно;</Text>
          
          <Name>Pool bar</Name>
          <Text>напитки, закуски, мороженое, работает с 8:00 до 20:00 (функционирует с мая по октябрь).</Text>
        </Item>
        <Photo photos={photos}/>
        <Footer/>
      </Container>
</>
    );
  }
}

const mapStateToProps = state => ({
  arr: state.arr,
  links: state.links
});

const mapDispatchToProps = dispatch => ({
  ThemeActions: bindActionCreators(ThemeActions, dispatch),
});


export default connect(mapStateToProps,mapDispatchToProps)(Food);