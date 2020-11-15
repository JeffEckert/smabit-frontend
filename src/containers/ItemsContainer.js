import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchItems} from '../actions/fetchItems'
import Items from '../components/Items'
import ItemInput from '../components/ItemInput'
import Item from '../components/ItemShow'

class ItemsContainer extends React.Component {

    componentDidMount() {
       this.props.fetchItems() 
    } 
    
    render() {
        return(
            <div>
                <Route path='/items/new' component={ItemInput}/>
                <Route exact path='/items' render={(routerProps) => <Items {...routerProps} items={this.props.items}/>}/>
                <Route path='/items/:id'  render={(routerProps) => <Item {...routerProps} items={this.props.items}/>}/>
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