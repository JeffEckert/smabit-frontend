import React from 'react'
import TransactionInput from '../components/TransactionInput'
import Transactions from '../components/Transactions'


class TransactionsContainer extends React.Component {

render() {
    return (
        <div>
            <TransactionInput item={this.props.item}/><br/>
            <h3>Item Transactions</h3>
            <Transactions transactions={this.props.item && this.props.item.transactions}/>
        </div>
    )

}



}

export default TransactionsContainer