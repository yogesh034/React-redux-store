import {ActionType} from '../constant/action-type'

const inialstate = {
    product:[]
}

export const productreducer = (state = inialstate,{type,payload}) =>{

    switch (type) {
        case ActionType.SET_PRODUCT:
            return  {...state,product:payload};
            break;
    
        default: return state;
            break;
    }

}

export const singlereducer = (state={},{type,payload}) =>{

    switch (type) {
        case ActionType.GET_PRODUCT:
            return {...state, ...payload}
            break;
    
        default:
            return state;
            break;
    }

}