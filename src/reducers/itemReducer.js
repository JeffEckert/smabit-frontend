// import { bindActionCreators } from "redux";

export default function itemReducer(state = {items: []}, action) {

    switch (action.type) {
    case 'FETCH_ITEMS':
        return {items: action.payload}
    case 'ADD_ITEM':
        return {...state, items: [...state.items, action.payload]}
    default:
        return state

    }

}