import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { BtnNewComponent } from './../components/btn-new-component'
import { BtnTurnComponent } from './../components/btn-turn-component'

import { changeDominoRotateAction } from './../../Header/actions/changeDominoRotateAction'

class HeaderComponent extends PureComponent {

    rotateFigure = (value) => {
        let { dominoRotate, dispatch } = this.props
        dispatch(changeDominoRotateAction(dominoRotate + value))
    }

    render() {
        return <header className="header">
            <BtnTurnComponent customClassName="btn--turn-l" rotateFigure={()=>{this.rotateFigure(90)}}/>
            <BtnNewComponent />
            <BtnTurnComponent customClassName="btn--turn-r" rotateFigure={()=>{this.rotateFigure(-90)}}/>
        </header>
    }
}

const mapStateToProps = (state) => {
    return {
        dominoRotate: state.dominoRotate
    }
}

export default connect(mapStateToProps)(HeaderComponent)