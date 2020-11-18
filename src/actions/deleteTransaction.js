export const deleteTransaction = (transactionId, itemId) => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/api/v1/items/${itemId}/transactions/${transactionId}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(item => dispatch({type: 'DELETE_TRANSACTION', payload: item}))
    }
  }