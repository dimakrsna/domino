import React, { Component } from 'react'
import { connect } from 'react-redux'

import { DominoItemComponent } from '../components/domino-item-component'


class DominoContainer extends Component {

    render(){
        let { dominoRotate, rotateSpeed, scaleValue, currentPoints } = this.props

        const styleDiv = {
            transform: `rotate(${dominoRotate}deg) scale(${scaleValue / 100})`,
            transition: `${rotateSpeed * 10}ms`
        }

        return <div className="domino" style={styleDiv}>
            <DominoItemComponent points={currentPoints[0]} />
            <DominoItemComponent points={currentPoints[1]} />
        </div>
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(DominoContainer)