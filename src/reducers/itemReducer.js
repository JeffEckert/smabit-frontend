// import { bindActionCreators } from "redux";

export default function itemReducer(state = {items: []}, action) {

    switch (action.type) {
    case 'FETCH_ITEMS':
        return {items: action.payload}
    case 'ADD_ITEM':
        return {...state, items: [...state.items, action.payload]}
    case 'ADD_TRANSACTION':
            let items = state.items.map(item => {
              if (item.id === action.payload.id) {
                return action.payload
              } else {
                return item
              }
            })
            return {...state, items: items}     
    default:
        return state

    }

}