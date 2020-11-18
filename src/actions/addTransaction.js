export const addTransaction = (transaction, itemId) => {

    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/items/${itemId}/transactions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(transaction)
      })
      .then(response => response.json())
      .then(item => {
          if (item.error) {
            alert(item.error)
          } else {
            dispatch({type: 'ADD_TRANSACTION', payload: item})
          }
        }
      )
    }
  }