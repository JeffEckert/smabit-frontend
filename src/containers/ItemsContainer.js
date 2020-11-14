import React from 'react'
import {connect} from 'react-redux'
import Items from '../components/Items'
import ItemInput from '../components/ItemInput'

class ItemsContainer extends React.Component {

    componentDidMount() {
        
    } 
    
    render() {
        return(
            <div>
                <ItemInput/>
                <Items/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(ItemsContainer)