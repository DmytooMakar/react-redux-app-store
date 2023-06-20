import { combineReducers } from "redux";
import { productReducer, selectedProductReduce } from "./productReducer";

export const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReduce
})