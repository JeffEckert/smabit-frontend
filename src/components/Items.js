import React from 'react'
import Item from './ItemShow'

const Items = (props) => {

    return (
         <div>
             {props.items.map(item => <div key={item.id}><Item item={item}/></div>)}
        </div>
    )
}

export default Items