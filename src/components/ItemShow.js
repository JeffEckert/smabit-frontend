import React from 'react'
import {Redirect} from 'react-router-dom'



const Item = (props) => {

    let item = props.items[props.match.params.id - 1]

    return (
        <h2>
            {item ? null : <Redirect to='/items'/>}
            {item ? item.name : null} - {item ? item.balance : null}
        </h2>

    )


}

export default Item