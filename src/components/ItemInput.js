import React from 'react'
import {connect} from 'react-redux'
import {addItem} from '../actions/addItem'

class ItemInput extends React.Component {

state = {name: '', balance: ''}

handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
}


handleSubmit = (event) => {
    event.preventDefault()
    this.props.addItem(this.state)
    this.setState({
      name: '',
      balance: ''
    })
}

    render() {
        return (
            <div>
                <h3>Item Creation Form</h3>
                <h4>Please Use the form below to add new Items you wish to manage the inventory of.</h4>
                <form onSubmit={this.handleSubmit}>
                    <label>Item Name</label>
                    <input type='text' placeholder='Name'value={this.state.name} name="name" onChange={this.handleChange}/>
                    <br></br>
                    <label>Balance</label>
                    <input type='text' placeholder='Balance'value={this.state.balance} name="balance" onChange={this.handleChange}/>
                    <br></br>
                    <input type="submit"/>

                </form>
            </div>
        )
    }
}

export default connect(null, {addItem}) (ItemInput)