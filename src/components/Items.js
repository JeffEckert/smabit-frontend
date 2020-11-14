import React from 'react'


const Items = (props) => {

    return (
         <div>
             {props.items.map(item => <li key={item.id}>{item.name} - {item.balance}</li>)}
        </div>
    )
}

export default Items