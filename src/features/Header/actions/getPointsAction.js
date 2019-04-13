import { POINTS } from './../../../store/consts'

export const getPointsAction = (value) => {
    return {
        type: POINTS,
        payload: value
    }
}