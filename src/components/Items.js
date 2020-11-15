import React from 'react'
import Item from './ItemShow'

const Items = (props) => {

    return (
         <div>
             {props.items.map(item => <li key={item.id}><Item item={item}/></li>)}
        </div>
    )
}

export default Items