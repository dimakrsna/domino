import { createStore, combineReducers } from 'redux'

import { dominoRotateReducer } from './../features/Header/reducers/dominoRotateReducer'

const rootReducer = combineReducers({
    dominoRotate: dominoRotateReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());