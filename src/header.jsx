import React from 'react';
import { Container, Input, Button, Menu } from 'semantic-ui-react';
import './Header.css'; 
import logo from './image 1.jpeg'; 


const Header = () => {
  return (
    <div>
      <Menu fixed="top" borderless className="header-menu">
        <Container>
          <Menu.Item position="left">
            DEV@Deakin
          </Menu.Item>
          <Menu.Item position="center" className="search-bar">
            <Input 
              icon="search" 
              placeholder="Search..." 
              style={{ width: '50%' }} 
            />
          </Menu.Item>
          <Menu.Item position="right">
            <Button primary>Post</Button>
            <Button secondary style={{ marginLeft: '0.5em' }}>Login</Button>
          </Menu.Item>
        </Container>
      </Menu>
      <div className="image-container">
        <img src={logo} alt="image 1.jpeg" className="big-image" />
      </div>
    </div>
  );
};

export default Header;


