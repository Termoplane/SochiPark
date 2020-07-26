import React from 'react'

import {
  Button,
} from './styles';


class ToggleMenuButton extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {toggleMenu,onClick} = this.props
    return (
      <Button onClick={onClick} toggleMenu={toggleMenu}/>
      )
    }
  }

  export default ToggleMenuButton