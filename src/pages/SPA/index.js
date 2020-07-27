import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ThemeActions from '../../actions/themeActions';
import { Anchor,Descriptions, Badge,Row,Col } from 'antd';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {arr_description} from './arr';

import { 
  Container, 
  Item,
  List,
  Title
} from './styles';

class SPA extends React.Component {
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
        <Row justify="center" >
          {arr_description.map((item)=> {
            return(
              <Col xm={{span:24}} sm={{span:24}} lg={{span:8}}> 
              <Title>{item.title}</Title>

                {item.description.map((i)=> {
                  return (
                    <List>{i}</List>
                    );
                  })}
              </Col>
                )
              })}
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


export default connect(mapStateToProps,mapDispatchToProps)(SPA);