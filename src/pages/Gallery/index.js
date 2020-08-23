import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ThemeActions from '../../actions/themeActions';
import { Anchor,Descriptions, Badge,Row,Col } from 'antd';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import Photo from '../../components/Photo'


import a1 from './1.jpg'
import a2 from './2.jpg'
import a3 from './3.jpg'
import a4 from './4.jpg'
import a5 from './5.jpg'
import a6 from './6.jpg'
import a7 from './7.jpg'
import a8 from './8.jpg'
import a9 from './9.jpg'


const photos = [
  {
    src: a1,
    width: 4,
    height: 3
  },
  {
    src: a2,
    width: 1,
    height: 1
  },
  {
    src: a3,
    width: 3,
    height: 4
  },
  {
    src: a4,
    width: 3,
    height: 4
  },
  {
    src: a5,
    width: 3,
    height: 4
  },
  {
    src: a6,
    width: 4,
    height: 3
  },
  {
    src: a7,
    width: 3,
    height: 4
  },
  {
    src: a8,
    width: 3,
    height: 4
  },
  {
    src: a9,
    width: 3,
    height: 4
  },

];

import { 
  Container, 
  Item,
  Title,
} from './styles';

class Gallery extends React.Component {
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
          <Title>Сочи Парк Отель фото</Title>
          <Photo photos={photos}/>
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


export default connect(mapStateToProps,mapDispatchToProps)(Gallery);