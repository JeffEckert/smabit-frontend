import React from 'react'
import {connect} from 'react-redux'
import {fetchItems} from '../actions/fetchItems'
import Items from '../components/Items'
import ItemInput from '../components/ItemInput'

class ItemsContainer extends React.Component {

    componentDidMount() {
       this.props.fetchItems() 
    } 
    
    render() {
        return(
            <div>
                <ItemInput/>
                <Items items={this.props.items}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps, {fetchItems})(ItemsContainer)