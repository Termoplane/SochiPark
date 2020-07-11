import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Anchor } from 'antd';
import * as ThemeActions from '../../actions/themeActions';

import './style.css'

import Navbar from '../../components/Navbar';
import Swiper from '../../components/Swiper';
import LandingInformation from '../../components/LandingInformation';
import RoomPick from '../../components/RoomPick';
import LandingDescription from '../../components/LandingDescription';
import LandingLinks from '../../components/LandingLinks';

import { 
  Container, 
} from './styles';

class Landing extends React.Component {
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
      <Container>
          <Navbar onClick={this.handleClick} toggleMenu={toggleMenu} arr={menu}/>
          <Swiper/>
          <LandingInformation/>
          <RoomPick arr={room}/>
          <LandingDescription/>
          <LandingLinks/>
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


export default connect(mapStateToProps,mapDispatchToProps)(Landing);