import { ActionTypes } from "../contents/action-types";

const initialState = {
    products: []
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: action.payload };
        default:
            return state;
    }
}

export const selectedProductReduce = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...action.payload};
        default:
            return state;
    }
}