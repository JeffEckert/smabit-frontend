import React from 'react'
import Items from '../components/Items'
import ItemInput from '../components/ItemInput'

class ItemsContainer extends React.Component {
    
    render() {
        return(
            <div>
                <ItemInput/>
                <Items/>
            </div>
        )
    }
}

export default ItemsContainer