import React from 'react'

class ItemInput extends React.Component {

    render() {
        return (
            <div>
                <form>
                    <label>Item Name</label>
                    <input type='text' placeholder='Name'/>
                </form>
            </div>
        )
    }
}

export default ItemInput