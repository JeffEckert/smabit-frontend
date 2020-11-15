import React from 'react'



const Item = (props) => {

    return (
        <li>
            {props.item.name} - {props.item.balance}
        </li>

    )


}

export default Item