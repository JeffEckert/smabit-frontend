import React from 'react'

class ItemInput extends React.Component {

    render() {
        return (
            <div>
                <form>
                    <label>Item Name</label>
                    <input type='text' placeholder='Name'/>
                    <br></br>
                    <label>Balance</label>
                    <input type='text' placeholder='Balance'/>
                </form>
            </div>
        )
    }
}

export default ItemInput