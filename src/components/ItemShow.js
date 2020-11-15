import React from 'react'



const Item = (props) => {

    return (
        <div>
            {props.item.name} - {props.item.balance}
        </div>

    )


}

export default Item