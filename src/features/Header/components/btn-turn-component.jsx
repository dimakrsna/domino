import React from 'react'

export const BtnTurnComponent = React.memo((props) => {
    let { customClassName, rotateFigure} = props
    return <button className={`btn ${customClassName}`} onClick={rotateFigure}></button>
})