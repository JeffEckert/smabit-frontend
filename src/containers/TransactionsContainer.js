import React from 'react'
import TransactionInput from '../components/TransactionInput'
import Transactions from '../components/Transactions'
import Listgroup from 'react-bootstrap/Listgroup'


class TransactionsContainer extends React.Component {

render() {
    return (
        <div>
            <TransactionInput item={this.props.item}/><br/>
            <h3>Item Transactions</h3>
            <Listgroup>
            <Listgroup.Item><Transactions transactions={this.props.item && this.props.item.transactions}/></Listgroup.Item>
            </Listgroup>
        </div>
    )

}



}

export default TransactionsContainer