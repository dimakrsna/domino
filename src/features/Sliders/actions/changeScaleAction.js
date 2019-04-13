import { SCALE } from '../../../store/consts'

export const changeScaleAction = (value) => {
    return {
        type: SCALE,
        payload: value
    }
}