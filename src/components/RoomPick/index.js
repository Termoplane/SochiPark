import React from 'react';

import { v4 as uuidv4 } from 'uuid';

import {
  Container,
  ItemContainer,
  Item,
  ItemDescription,
  ItemDescriptionText,
  ButtonContainer,
  Button,
} from './styles.js';

class RoomPick extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isOpenSubMenu: false,
      currentItem:0,
    }
  }

  onOpen = (index) => {
   const {isOpenSubMenu, currentItem} = this.state;

    this.setState ({
        isOpenSubMenu: true,
        currentItem: index,
      })
    }

  onClose = () => {
    this.setState({
      isOpenSubMenu: false,
    })
  }

  render () {
    const {arr} = this.props;    
    const {isOpenSubMenu, currentItem} = this.state
    return (
      <Container>
        {arr.map((item, index)=> {  
            // {isOpenSubMenu && currentItem === index ? a : b}
          return(
        <ItemContainer onMouseEnter={() => {this.onOpen(index)}} onMouseLeave={this.onClose}>
            <Item background={item.background}>
              <ItemDescription open={isOpenSubMenu && currentItem === index ? true : false}>
               <ItemDescriptionText>{item.title}</ItemDescriptionText> 
               <ItemDescriptionText>Цена: {item.price}</ItemDescriptionText> 

               <ButtonContainer open={isOpenSubMenu && currentItem === index ? true : false}>
                <Button open={isOpenSubMenu && currentItem === index ? true : false}>Подробнее</Button>
               </ButtonContainer>
              </ItemDescription>
            </Item>
        </ItemContainer>      
        )
        })}  
      </Container>     
    )
  }
}

export default RoomPick;