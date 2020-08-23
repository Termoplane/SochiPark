import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ThemeActions from '../../actions/themeActions';
import { Anchor,Descriptions, Badge,Row,Col } from 'antd';

import Navbar from '../../components/Navbar';
import Form from '../../components/Form';
import Footer from '../../components/Footer';
import Photo from '../../components/Photo'
import Calculator from '../../components/Calculator'


import {
  BrowserRouter as Router,
  Link,
  useParams
} from "react-router-dom";

import { 
  Container, 
  Item,
  Title,
  ItemMargin,
  SubTitle,
  ContainerPhoto,
  Description,
  Sub,
} from './styles';



function Room(props) {
  const {room, toggleMenu} = props.arr    
  const {menu} = props.links

 let handleClick = () => {
    props.ThemeActions.changeMenu();
  }

  let { id } = useParams();

  let currentRoom = room.filter((item) => {
    if(id <= 8) {
        return id === item.id;
    } else {
      id = '1'
      return id === item.id;
    }
  });
      return (
    <Anchor>
      <Navbar onClick={handleClick} toggleMenu={toggleMenu} arr={menu}/>
      <Container>
        <Item>
          <Title>
              Сочи парк отель номер
              <br/>
              {currentRoom[0].title}
          </Title>
          <SubTitle>
          </SubTitle>
          <Description>
          <Sub> Описание номера:</Sub>
            {currentRoom[0].description}
          </Description>
          <ContainerPhoto>
            <Photo photos={currentRoom[0].photos}/>
          </ContainerPhoto>
          <Calculator/>
        </Item>
        <Footer/>
      </Container>
    </Anchor>
    );
}

const mapStateToProps = state => ({
  arr: state.arr,
  links: state.links
});

const mapDispatchToProps = dispatch => ({
  ThemeActions: bindActionCreators(ThemeActions, dispatch),
});


export default connect(mapStateToProps,mapDispatchToProps)(Room);