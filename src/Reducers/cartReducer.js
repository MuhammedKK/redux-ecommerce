// initial state
const initstate = {
    cart:[],
    empty: 0
}
// create the reducer
const cartReducer = (state = initstate, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            state = {
            ...state,
            cart: [...state.cart, action.payload]
        }
            break;
        case "REMOVE_FROM_CART":
            state = {
                ...state,
                cart: state.cart - action.payload
            };
            break;
        default:
            state = {
                ...state
            };
            break
    }
    return state;
}

export default cartReducer