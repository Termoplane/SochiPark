import React from 'react';

import { v4 as uuidv4 } from 'uuid';

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

            return( 
              <MenuItem key={`${idForMap}`,item.title}>
                <MenuItemTitle>{item.title}</MenuItemTitle>
              {name.map((i)=> {
                return (
                  <div key={`${idForMap}`, item.title}>
                <MenuItemList>{i}</MenuItemList>
                  </div>
                )
              })}
              </MenuItem>
            );
          })}

          </MenuContainer>
        </Menu>
        
        <Header>
          <ToggleMenuButton onClick={onClick} toggleMenu={toggleMenu}/>
          <Logo/>
          <Number show={toggleMenu}>8-888-888-88-88</Number>
          <NumberIcon/>
        </Header>
      </Container>
      )
    }
  }

export default Navbar;
