import React from 'react'


class ItemEdit extends React.Component {

     

    state = {
        name: '',
        balance: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let account = {...this.state, id: this.props.account.id}
        this.props.editAccount(account)
        this.setState({
          name: '',
          balance: ''
        })
    }


    // render() {
    //     return (
    //       <div>
    //         <form onSubmit={this.handleSubmit}>
    //           <label>Checking Item Name: </label>
    //           <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
    //           <label>Checking Account Balance: </label>
    //           <input type='text' placeholder='Balance' value={this.state.balance} name="balance" onChange={this.handleChange}/><br/>
    //           <input type="submit"/>
    //         </form>
    //       </div>
    //     )
    //   }
    // }





}

export default ItemEdit