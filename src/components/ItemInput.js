import React from 'react'

class ItemInput extends React.Component {

state = {name: '', balance: ''}

    render() {
        return (
            <div>
                <form>
                    <label>Item Name</label>
                    <input type='text' placeholder='Name'value={this.state.name} onChange={this.handleChange}/>
                    <br></br>
                    <label>Balance</label>
                    <input type='text' placeholder='Balance'value={this.state.balance} onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default ItemInput