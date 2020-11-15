import React from 'react'
import {Route, Link} from 'react-router-dom'
import Item from './ItemShow'

const Items = (props) => {

    return (
        <div>
          {props.items.map(item =>
            <li key={item.id}>
              <Link to={`/items/${item.id}`}>{item.name} - ${item.balance}</Link>
            </li> )}
        </div>
    
    )
}

export default Items