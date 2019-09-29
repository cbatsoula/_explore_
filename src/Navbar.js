import React from 'react';
import { Menu } from 'semantic-ui-react';
import SolarSystemCollection from './SolarSystemCollection'

export default class Navbar extends React.Component {

  render () {
    const { activeItem } = this.props
    // console.log("navbar", "state:", this.state, "props:", this.props)
    return(
      <Menu>
        <Menu.Item
          name='celestial bodies'
          active={activeItem === 'celestial bodies'}
          content='Celestial Bodies'
          onClick={this.props.selectNav}>

          </Menu.Item>

        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          content='Home'
          onClick={this.props.selectNav}
        />


        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          content='Upcoming Events'
          onClick={this.props.selectNav}
        />
      </Menu>

    )
  }
}
