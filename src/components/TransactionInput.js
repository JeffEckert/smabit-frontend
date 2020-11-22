import React from 'react'
import {connect} from 'react-redux'
import {addTransaction} from '../actions/addTransaction'

class TransactionInput extends React.Component {

    state = {
        kind: 'add',
        amount: '',
        note: ''
      }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTransaction(this.state, this.props.item.id)
            this.setState({
                kind: 'add',
                amount: '',
                note: ''
            })

    }



    render() {
        return (
        <div>
            <h3>Transaction form</h3>
            <p>Please enter new transactions in the form below.</p>
         <form onSubmit={this.handleSubmit}>
          <label>Transaction Type:</label>
          <select name="kind" value={this.state.kind} onChange={this.handleChange}>
            <option>add</option>
            <option>subtract</option>
          </select>
          <label>Transaction Amount:</label>
          <input type="text" name="amount" value={this.state.amount} onChange={this.handleChange}/>
          <label>Transaction Note:</label>
          <input type="text" name="note" value={this.state.note} onChange={this.handleChange}/>
          <input type="submit"/>
         </form>
      </div>
        )
    }

}

export default connect(null, {addTransaction})(TransactionInput)