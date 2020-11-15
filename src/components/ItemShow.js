import React from 'react'




const Item = (props) => {

    let item = props.items[props.match.params.id - 1]

    return (
        <li>
            {item ? item.name : null} - {item ? item.balance : null}
        </li>

    )


}

export default Item