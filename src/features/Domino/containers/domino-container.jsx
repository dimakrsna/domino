import React, { Component } from 'react'
import { connect } from 'react-redux'

import { DominoItemComponent } from '../components/domino-item-component'


class DominoContainer extends Component {

    render(){
        let { dominoRotate } = this.props

        const styleDiv = {
            transform: `rotate(${dominoRotate}deg)`
        }

        return <div className="domino" style={styleDiv}>
            <DominoItemComponent points={1} />
            <DominoItemComponent points={3} />
        </div>
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(DominoContainer)