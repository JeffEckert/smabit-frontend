import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'

const NavBar = (props) => {

  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">SmaBIT</Navbar.Brand>
            <Nav className="mr-auto">
                <Link to='/items' style={{paddingRight: '10px'}}>Items  </Link>
                <Link to='/items/new'style={{paddingRight: '10px'}}> Add Item  </Link>
                <Link to='/'>Home</Link>
            </Nav>

        </Navbar>

    </div>

  )
}

export default NavBar