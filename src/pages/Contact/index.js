import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ThemeActions from '../../actions/themeActions';
import { Anchor,Descriptions, Badge,Row,Col } from 'antd';

import Navbar from '../../components/Navbar';
import Form from '../../components/Form';
import Footer from '../../components/Footer';

import Maps from './Map'

import { 
  Container, 
  Item,
  Title,
  ItemMargin,
  SubTitle,
} from './styles';

class Contact extends React.Component {
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
          <Row justify="center" align="middle">

            <ItemMargin>
            <Col sm ={{span:24}} md={{span:24}} >
              <Row >
                <Col span={24}><Title>Сочи Парк Отель Контакты</Title></Col>
                <Col span={24}><SubTitle>Адрес: пр-т. Континентальный, 6</SubTitle></Col>
                <Col span={24}><SubTitle>Почта: sochiparkhotel.resort@gmail.com</SubTitle></Col>
                <Col span={24}><SubTitle>Телефон: +7 964 894-56-60</SubTitle></Col>
              </Row>
            </Col>
            </ItemMargin>
            <Col span={24}><Maps/></Col>
          </Row>
        </Item>
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


export default connect(mapStateToProps,mapDispatchToProps)(Contact);