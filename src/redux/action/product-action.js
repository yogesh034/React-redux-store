import {ActionType} from '../constant/action-type'

export const setproduct = (products) =>{
    return{
        'type' : ActionType.SET_PRODUCT,
        'payload' : products
    }
}

export const getproduct = (product) =>{
    return{
        'type' : ActionType.GET_PRODUCT,
        'payload' : product
    }
}