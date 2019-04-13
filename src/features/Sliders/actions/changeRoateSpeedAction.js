import { ROTATE_SPEED } from './../../../store/consts'

export const changeRoateSpeedAction = (value) => {
    return {
        type: ROTATE_SPEED,
        payload: value
    }
}