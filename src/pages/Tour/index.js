import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ThemeActions from '../../actions/themeActions';
import { Anchor,Descriptions, Badge,Row,Col } from 'antd';

import Navbar from '../../components/Navbar';
import Form from '../../components/Form';
import Footer from '../../components/Footer';


import { 
  Container, 
  Title,
  Description,
  Item,
  Island,
} from './styles';

class Tour extends React.Component {
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
          <Row justyfy="center" align="middle">
            <Col span={24}><Title><Island/>Туры в Сочи Парк Отель<Island/></Title></Col>
            <Col span={24}><Description>Заполните форму и мы вам предложим туры</Description></Col>

          <Form/>
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


export default connect(mapStateToProps,mapDispatchToProps)(Tour);