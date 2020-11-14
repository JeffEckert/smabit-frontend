import React from 'react'

class ItemInput extends React.Component {

state = {name: '', balance: ''}

    render() {
        return (
            <div>
                <form>
                    <label>Item Name</label>
                    <input type='text' placeholder='Name'value={this.state.name}/>
                    <br></br>
                    <label>Balance</label>
                    <input type='text' placeholder='Balance'value={this.state.balance}/>
                </form>
            </div>
        )
    }
}

export default ItemInput