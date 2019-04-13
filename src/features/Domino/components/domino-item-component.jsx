import React from 'react'

import { PointComponent } from './point-component'

export const DominoItemComponent = React.memo((props) => {
    let { points } = props

    const drawPoints = (val) => {
        let temp = []

        for (let i = 0; i < val; i++) {
            temp.push(<PointComponent key={`point-${i}`} />)
        }

        return temp
    }

    return <div className={`domino__item domino__item--${points}`}>
        {drawPoints(points)}
    </div>
})