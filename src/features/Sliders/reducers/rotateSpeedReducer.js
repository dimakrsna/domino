import { ROTATE_SPEED } from './../../../store/consts'

export const rotateSpeedReducer = (state = 30, action) => {
    switch (action.type) {
        case ROTATE_SPEED:
            return action.payload
    }

    return state
}