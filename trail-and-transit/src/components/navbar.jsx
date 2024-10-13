import React, { useState } from 'react'
import { MenuMenu, MenuItem, Menu, Item, Image, ItemImage, ItemGroup } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'

function Navbar() {
  // handle each click to set the sate of the 'activeItem' to the name of the thing that was clicked
    const [activeItem, setActiveItem] = useState('')

    const handleItemClick = (e, {name}) => {
      setActiveItem(name)
    };

    return (
      <Menu secondary>
        <Link to="/" relative="path">
        <MenuItem
          name='home'
          onClick={handleItemClick}
          as="div"
        >
          <ItemImage size='tiny' src={logo} id="nav-logo"/>
        </MenuItem>
        </Link>
        <MenuMenu position='right'>
        <Link to="/peru" relative="path">
        <MenuItem
          name='peru'
          active={activeItem === 'peru'}
          onClick={handleItemClick}
          as="div"
        >
          Peru
        </MenuItem>
        </Link>
        <Link to="/japan" relative="path">
        <MenuItem
          name='japan'
          active={activeItem === 'japan'}
          onClick={handleItemClick}
          as="div"
        >
          Japan
        </MenuItem>
        </Link>
        <Link to="/about" relative="path">

        <MenuItem
          name='about'
          active={activeItem === 'about'}
          onClick={handleItemClick}
          as="div"
        >
          About
        </MenuItem>
        </Link>
        </MenuMenu>
      </Menu>
    )
}

export default Navbar
