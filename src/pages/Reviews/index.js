import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ThemeActions from '../../actions/themeActions';
import { Anchor,Descriptions, Badge,Row,Col } from 'antd';

import Navbar from '../../components/Navbar';
import Form from '../../components/Form';
import Footer from '../../components/Footer';
import Calculator from '../../components/Calculator';

import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

import { 
  Container, 
  Item,
  ItemCard,
  Link
} from './styles';

class Reviews extends React.Component {
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
    <Anchor>
      <Navbar onClick={this.handleClick} toggleMenu={toggleMenu} arr={menu}/>
      <Container>
        <Item>
          <Row justify="space-around">
            <Col xs={{span:24}} lg={{span:6}} offset={2}>
              <ItemCard style={{ width: 300 }}>
                <Meta
                  avatar={<Avatar src="https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/ef/73/default-avatar-2020-13.jpg" />}
                  title="Четыре дня в сказке."
                  description="Отель расположен в Олимпийском парке. На территории отеля много интересного для всех отдыхающих, с самыми разными интересами и вкусами. Пальмы, мосты, прудики, домики с птицами, детские площадки, садовые композиции из живых кустарников в виде животных..."
                  />
                  <Link href="https://www.tripadvisor.ru/ShowUserReviews-g1956128-d6508762-r744561760-Sochi_Park_Hotel-Adler_Adler_District_Sochi_Greater_Sochi_Krasnodar_Krai_Southe.html">Читать дальше...</Link>
              </ItemCard>
            </Col>
            <Col xs={{span:24}} lg={{span:6}}  offset={2}>
                <ItemCard style={{ width: 300 }}>
                  <Meta
                    avatar={<Avatar src="https://media-cdn.tripadvisor.com/media/photo-l/19/c1/5c/b2/avatar.jpg" />}
                    title="Хороший отель"
                    description="Хороший отель за свою цену. Летали отдыхать в феврале месяце. По прилету максимально быстро засалили. Так как прилетели когда ужин закончился. Выдали по ланч-боксу, мелочь но приятно. Жили в 5 корпусе. Все понравилось. Кто пишет, что ковры грязные. Они не грязные, а просто уже изношены..."
                    />
                     <Link href="https://www.tripadvisor.ru/ShowUserReviews-g1956128-d6508762-r750259374-Sochi_Park_Hotel-Adler_Adler_District_Sochi_Greater_Sochi_Krasnodar_Krai_Southe.html">Читать дальше...</Link>
                </ItemCard>
            </Col>
            <Col xs={{span:24}} lg={{span:6}} offset={2}>
                <ItemCard style={{ width: 300 }}>
                  <Meta
                    avatar={<Avatar src="https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/f1/79/default-avatar-2020-21.jpg" />}
                    title="хороший семейны отель"
                    description="Отличный уровень сервиса: ежедневная уборка, вежливый персонал, достойное питание (завтрак включен в стоимость путевки) на шведском столе, ухоженная и облагороженная территория. Кроме того, прямо на территории есть медпункт, аптеки, продуктовые магазины, сувенирная лавка и даже банкоматы ключевых банков..."
                    />
                    <Link href="https://www.tripadvisor.ru/ShowUserReviews-g1956128-d6508762-r760480443-Sochi_Park_Hotel-Adler_Adler_District_Sochi_Greater_Sochi_Krasnodar_Krai_Southe.html">Читать дальше...</Link>
                </ItemCard>
            </Col>
            <Col xs={{span:24}} lg={{span:6}} offset={2}>
                <ItemCard style={{ width: 300 }}>
                  <Meta
                    avatar={<Avatar src="https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/e7/3d/default-avatar-2020-55.jpg" />}
                    title="Приятный отдых в зимний период."
                    description="Довелось посетить Сочи Парк отель 22.02.2020г. решили выбраться на выходные в зимнее время. Сами из Ростова-на-Дону. Путешествие выбрали на автомобиле (в следующий раз поедем на поезде). Дорога из Ростова до Сочи ( туда и обратно с учетом платных дорог и расходом 7л) обошлась 4700 руб. По времени ехали 8 часов. Парк отель брали по скидке 3500 за 3 дня и 2 ночи + завтраки..."
                    />
                    <Link href="https://www.tripadvisor.ru/ShowUserReviews-g1956128-d6508762-r747663173-Sochi_Park_Hotel-Adler_Adler_District_Sochi_Greater_Sochi_Krasnodar_Krai_Southe.html">Читать дальше...</Link>
                </ItemCard>
            </Col>
            <Col xs={{span:24}} lg={{span:6}} offset={2}>
                <ItemCard style={{ width: 300 }}>
                  <Meta
                    avatar={<Avatar src="https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/e7/fe/default-avatar-2020-58.jpg" />}
                    title="Море и солнце нас впечатлили"
                    description="Приехали мы в день открытия сразу после карантина.Тур приобрели за сущие копейки ,на завтраках.Плюсы: номера хорошие,горячая вода круглосуточно,уборка на пять с плюсом,персонал услужливый,чаевые не выпрашивают..."
                    />
                    <Link href="https://www.tripadvisor.ru/ShowUserReviews-g1956128-d6508762-r759334531-Sochi_Park_Hotel-Adler_Adler_District_Sochi_Greater_Sochi_Krasnodar_Krai_Southe.html">Читать дальше...</Link>
                </ItemCard>
            </Col>
      </Row>
        </Item>
      <Calculator/>
        <Footer/>
      </Container>
    </Anchor>
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


export default connect(mapStateToProps,mapDispatchToProps)(Reviews);