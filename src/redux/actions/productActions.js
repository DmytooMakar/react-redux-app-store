import { ActionTypes } from "../contents/action-types"

export const setProducts = payload => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload
    }
}

export const selectedProduct = payload => {
    return {
        type : ActionTypes.SELECTED_PRODUCT,
        payload
    }
}

export const removeSelectedProduct = payload => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
        payload
    }
}