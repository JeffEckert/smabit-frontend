import React from 'react'
import {connect} from 'react-redux'
import {addTransaction} from '../actions/addTransaction'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

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
     <Card style={{width: '18rem' }}>
        <div>
            <h3>Transaction form</h3>
            <p>Please enter new transactions in the form below.</p>
         <Form onSubmit={this.handleSubmit}>
          <label>Transaction Type:</label>
          <select name="kind" value={this.state.kind} onChange={this.handleChange}>
            <option>add</option>
            <option>subtract</option>
          </select>
          <br/>
          <label>Transaction Amount:</label>
          <input type="text" name="amount" placeholder='amount' value={this.state.amount} onChange={this.handleChange}/>
          <br/>
          <label>Transaction Note:</label>
          <input type="text" name="note" placeholder='note' value={this.state.note} onChange={this.handleChange}/>
          <br/>
          <input type="submit"/>
         </Form>
      </div>
    </Card>
        )
    }

}

export default connect(null, {addTransaction})(TransactionInput)