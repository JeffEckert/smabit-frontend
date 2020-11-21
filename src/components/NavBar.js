import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/items' style={{paddingRight: '10px'}}>Items  </Link>
      <Link to='/items/new'style={{paddingRight: '10px'}}> Add Item  </Link>
      <Link to='/'>  Home</Link>
    </div>

  )
}

export default NavBar