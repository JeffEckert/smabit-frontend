import React from 'react'
import {Route, Link} from 'react-router-dom'
import Listgroup from 'react-bootstrap/Listgroup'


const Items = (props) => {

    return (
        <div>
            <h2>Items List</h2>
            <p>Here is your List of Items in your inventory and their Balances.</p>
            <p>Please Click Each Item for further details.</p>
            <Listgroup>
          {props.items.map(item =>
            <Listgroup.Item key={item.id}>
              <Link to={`/items/${item.id}`}>{item.name} - {item.balance}</Link>
            </Listgroup.Item> )}
            </Listgroup>
        </div>
    
    )
}

export default Items