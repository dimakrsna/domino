import React, { Component } from 'react'
import { connect } from 'react-redux'

import SliderComponent from './../components/slider-component.jsx'

import { changeRoateSpeedAction } from './../actions/changeRoateSpeedAction'
import { changeScaleAction } from './../actions/changeScaleAction'

class SlidersWrapContainer extends Component {

    changeScale = (val) => {
        this.props.dispatch(changeScaleAction(val))
    }

    changeSpeedHandler = (val) => {
        this.props.dispatch(changeRoateSpeedAction(val))
    }

    render(){
        let { rotateSpeed } = this.props

        return <div className="sliders-wrap">
            <SliderComponent title="Scale domino" handleChange={this.changeScale} min={100} max={135} />
            <SliderComponent title="Anim speed" handleChangeComplete={this.changeSpeedHandler} defaultValue={rotateSpeed}/>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        rotateSpeed: state.rotateSpeed,
        scaleValue: state.scaleValue
    }
}

export default connect(mapStateToProps)(SlidersWrapContainer)