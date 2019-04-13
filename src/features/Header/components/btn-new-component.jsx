import React from 'react'

export const BtnNewComponent = React.memo((props) => {
    let { customClassName, handler} = props
    return <button className={`btn ${customClassName}`} onClick={handler}>New domino</button>
})