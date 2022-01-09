import {combineReducers} from 'redux'
import {productreducer,singlereducer} from './product-reducer'

const reducer = combineReducers({
    allproducts : productreducer,
    product : singlereducer,
})

export default reducer;