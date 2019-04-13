import { POINTS } from './../../../store/consts'

export const pointsReducer = (state = [1, 1], action) => {
    switch(action.type){
        case POINTS: 
            return action.payload
    }

    return state
}