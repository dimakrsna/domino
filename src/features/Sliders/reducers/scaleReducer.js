import { SCALE } from '../../../store/consts'

export const scaleReducer = (state = 100, action) => {
    switch (action.type) {
        case SCALE:
            return action.payload
    }

    return state
}