import React from 'react'
import {Route, Link} from 'react-router-dom'
import Listgroup from 'react-bootstrap/Listgroup'


class Items extends React.Component {

state = {
  name: '',
  balance: '',
  sorted: false
}


toggleSorted = () => {
  this.setState({
    sorted: !this.state.sorted
  })
  if(this.state.sorted){
    window.location.reload();
  }
}





  render() {
   //const sortedItems = this.props.items.sort((a, b) => a.balance.localeCompare(b.balance))
   const {sorted} = this.state

   const sortedItems = sorted ? this.props.items.sort((a,b) => (b.balance - a.balance )) :  this.props.items
  



  console.log(sorted)

    return (
        <div>
            <h2>Items List</h2>
            <p>Here is your List of Items in your inventory and their Balances.</p>
            <p>Please Click Each Item for further details.</p>
            { <button onClick={() => this.toggleSorted()}>Sort</button> }
            <Listgroup>
              
          {sortedItems.map(item =>
            <Listgroup.Item key={item.id}>
              <Link to={`/items/${item.id}`}>{item.name} - {item.balance}</Link>
            </Listgroup.Item> )   }
            </Listgroup>
        </div>
    
    )
}
}

export default Items