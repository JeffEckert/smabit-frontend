
import React from 'react'
import {connect} from 'react-redux'
import {deleteTransaction} from '../actions/deleteTransaction'


const Transactions = (props) => {

    const handleDelete = (transaction) => {
        debugger;
        props.deleteTransaction(transaction.id, transaction.item_id);
    };


    return (
        <div>
            {props.transactions && props.transactions.map(transaction => <li key={transaction.id}>{transaction.kind} - {transaction.amount} - {transaction.note} - {transaction.date} <button onClick={() => handleDelete(transaction)}>Delete</button></li>
            )}
        </div>
    );

}

export default connect(null, {deleteTransaction})(Transactions)