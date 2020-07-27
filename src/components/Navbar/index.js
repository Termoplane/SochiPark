import React from 'react';

import { v4 as uuidv4 } from 'uuid';
import Link from 'react-router-dom/Link';

import ToggleMenuButton from '../../atoms/ToggleMenuButton'

import {
  Container,
  Header,
  Logo,
  Number,
  NumberIcon,
  Menu,
  MenuContainer,
  MenuItem,
  MenuItemList,
  MenuItemTitle,
} from './styles.js';


class Navbar extends React.Component{
  constructor(props){
    super(props)
    this.state={
      arr: this.props.arr
    }
  }
  
  
  render(){
    const {toggleMenu,onClick} = this.props
    const {arr} = this.state
    let idForMap = uuidv4()
    return(
      <Container>
        <Menu show={toggleMenu}>
          <MenuContainer>
          {arr.map((item)=>{  
            let name = [];

            for (let check of item.subTitle) {
              name.push(check)  
            };
                console.log(item.link);
            return( 
              <MenuItem key={`${idForMap}`,item.title}>
                  <Link  onClick={onClick} to={item.link}>
                <MenuItemTitle>{item.title}</MenuItemTitle>
                </Link>
              </MenuItem>
            );
          })}

          </MenuContainer>
        </Menu>
        
        <Header>
          <ToggleMenuButton onClick={onClick} toggleMenu={toggleMenu}/>
          <Link to="/"><Logo/></Link>
          <Number href="tel:+79648945660" show={toggleMenu}>+7 964 894-56-60</Number>
          <NumberIcon href="tel:+79648945660"/>
        </Header>
      </Container>
      )
    }
  }

export default Navbar;
