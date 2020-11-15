import React from 'react'
import Item from './Item'


const Item = (props) => {

    return (
        <div>
            {props.items.map(item =>
            <li key={item.id}><Item item={item}/><li></li>)}
        </div>

    )


}

export default Item