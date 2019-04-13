import React from 'react'

export const BtnNewComponent = React.memo((props) => {
    let { customClassName, getRandomPoints} = props
    return <button className={`btn ${customClassName}`} onClick={getRandomPoints}>New domino</button>
})