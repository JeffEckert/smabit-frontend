
import React from 'react'

const Transactions = (props) => {

    handleDelete = (transaction) => {
        this.props.deleteTransaction(transaction.id, transaction.account_id)
      }

    return (
        <div>
            {props.transactions && props.transactions.map(transaction =>
                <li key={transaction.id}>{transaction.kind} - {transaction.amount} - {transaction.note} - {transaction.date}<button onClick={handleDelete}>Delete</button></li>
            )}
        </div>
    )

}

export default Transactions