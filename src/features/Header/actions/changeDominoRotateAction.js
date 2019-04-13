import { DOMINO_ROTATE } from './../../../store/consts'

export const changeDominoRotateAction = (value) => {
    return {
        type: DOMINO_ROTATE,
        payload: value
    }
}