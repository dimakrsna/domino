import { createStore, combineReducers } from 'redux'

import { dominoRotateReducer } from './../features/Header/reducers/dominoRotateReducer'
import { rotateSpeedReducer } from './../features/Sliders/reducers/rotateSpeedReducer'
import { scaleReducer } from './../features/Sliders/reducers/scaleReducer'
import { pointsReducer } from './../features/Header/reducers/pointsReducer'

const rootReducer = combineReducers({
    dominoRotate: dominoRotateReducer,
    rotateSpeed: rotateSpeedReducer,
    scaleValue: scaleReducer,
    currentPoints: pointsReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());