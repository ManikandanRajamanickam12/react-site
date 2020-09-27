import React from 'react';
import'../component/Header.css'
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactsIcon from '@material-ui/icons/Contacts';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import { Nav, Navbar} from 'react-bootstrap';
import { Link  } from 'react-router-dom';



function Header() {

  return (
    
      <div className="nav_items">
        <Navbar bg="light" expand="lg" variant="light" className="restaurant_name">
          <Navbar.Brand href=""><p className="title">Green Leaf</p></Navbar.Brand>
          <Navbar.Toggle style={{backgroundColor:"pink"}}  aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="" id='nav-select'> 
                <Link className="router-link" to="/">
                  <p className="navbar-custom" >
                  <HomeIcon /> Home</p>
                </Link>
              </Nav.Link>
              <Nav.Link href="" id='nav-select'> 
                <Link className="router-link" to='/about'>
                  <p className="navbar-custom">
                  <InfoIcon /> About</p>
                </Link>
              </Nav.Link>
              <Nav.Link href="" id='nav-select'> 
                <Link to='/menu' className="router-link">
                  <p className="navbar-custom">
                  <RestaurantMenuIcon />  Menu</p>
                </Link>
              </Nav.Link>
              <Nav.Link href="" id='nav-select'>
                <Link to="/contact" className='router-link'>
                 <p className="navbar-custom">
                   <ContactsIcon /> Contact</p>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      );
      }
      export default Header;