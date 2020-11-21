import React from 'react'
import {connect} from 'react-redux'
import {editItem} from '../actions/editItem'


class ItemEdit extends React.Component {

     

    state = {
        name: '',
        balance: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let item = {...this.state, id: this.props.item.id}
        this.props.editItem(item)
        this.setState({
          name: '',
          balance: ''
        })
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }


    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>Checking Item Name: </label>
              <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
              <label>Checking item Balance: </label>
              <input type='text' placeholder='Balance' value={this.state.balance} name="balance" onChange={this.handleChange}/><br/>
              <input type="submit"/>
            </form>
          </div>
        )
    }
}

ItemEdit.defaultProps = {
    accounts: {}
}

export default connect (null, {editItem})(ItemEdit)