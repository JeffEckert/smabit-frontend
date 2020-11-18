import React from 'react'
import {connect} from 'react-redux'

class TransactionInput extends React.Component {

    state = {
        kind: 'add',
        amount: ''
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
          <label>Transaction Type:</label>
          <select name="kind" value={this.state.kind} onChange={this.handleChange}>
            <option>add</option>
            <option>subtract</option>
          </select>
          <label>Transaction Amount:</label>
          <input type="text" name="amount" value={this.state.amount} onChange={this.handleChange}/>
          <label>Transaction Note:</label>
          <input type="text" name="Note" value={this.state.note} onChange={this.handleChange}/>
          <input type="submit"/>
         </form>
      </div>
        )
    }

}

export default connect(null)(TransactionInput)