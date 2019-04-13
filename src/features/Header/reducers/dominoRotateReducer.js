import { DOMINO_ROTATE } from './../../../store/consts'

export const dominoRotateReducer = (state = 0, action) => {
    switch(action.type){
        case DOMINO_ROTATE:
            return action.payload
    }

    return state
}