import { createStore, combineReducers } from 'redux'

import { dominoRotateReducer } from './../features/Header/reducers/dominoRotateReducer'
import { rotateSpeedReducer } from './../features/Sliders/reducers/rotateSpeedReducer'

const rootReducer = combineReducers({
    dominoRotate: dominoRotateReducer,
    rotateSpeed: rotateSpeedReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());