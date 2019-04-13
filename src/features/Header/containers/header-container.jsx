import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { BtnNewComponent } from './../components/btn-new-component'
import { BtnTurnComponent } from './../components/btn-turn-component'

import { changeDominoRotateAction } from './../../Header/actions/changeDominoRotateAction'
import { getPointsAction } from './../actions/getPointsAction'

class HeaderComponent extends PureComponent {

    rotateFigure = (value) => {
        let { dominoRotate, dispatch } = this.props
        dispatch(changeDominoRotateAction(dominoRotate + value))
    }

    getRandomInteger() {
        let min = 1,
            max = 6;

        let rand = min + Math.random() * (max + 1 - min);
            rand = Math.floor(rand);

        return rand;
    }

    getRandomPoints = () => {
        let pointsArr = [
            this.getRandomInteger(),
            this.getRandomInteger()
        ]

        this.props.dispatch(getPointsAction(pointsArr))
    }

    render() {
        return <header className="header">
            <BtnTurnComponent customClassName="btn--turn-l" rotateFigure={() => { this.rotateFigure(-90) }} />
            <BtnNewComponent getRandomPoints={this.getRandomPoints} />
            <BtnTurnComponent customClassName="btn--turn-r" rotateFigure={() => { this.rotateFigure(90) }} />
        </header>
    }
}

const mapStateToProps = (state) => {
    return {
        dominoRotate: state.dominoRotate,
        points: state.points
    }
}

export default connect(mapStateToProps)(HeaderComponent)