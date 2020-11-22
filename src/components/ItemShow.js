import React from 'react'
import {Redirect} from 'react-router-dom'
import ItemEdit from './ItemEdit'

import TransactionsContainer from '../containers/TransactionsContainer'

const Item = (props) => {

    // let item = props.items[props.match.params.id - 1]
    let item = props.items.filter(item => item.id == props.match.params.id)[0]

    return (
     <div>
        <h2>
            {item ? null : <Redirect to='/items'/>}
            {item ? item.name : null} - {item ? item.balance : null}
        </h2>
        <TransactionsContainer item={item}/>
        <br/>
        <h4>Edit Item</h4>
      <ItemEdit item={item}/>
    </div>
    )


}

export default Item