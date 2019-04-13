import React, { Component } from 'react'
import { connect } from 'react-redux'

import SliderComponent from './../components/slider-component.jsx'

import { changeRoateSpeedAction } from './../actions/changeRoateSpeedAction'

class SlidersWrapContainer extends Component {

    foo = (val) => {
        console.log('Scale domino', val)
    }

    changeSpeedHandler = (val) => {
        this.props.dispatch(changeRoateSpeedAction(val))
    }

    render(){
        let { rotateSpeed } = this.props

        return <div className="sliders-wrap">
            <SliderComponent title="Scale domino" handleChange={this.foo} />
            <SliderComponent title="Anim speed" handleChange={this.changeSpeedHandler} defaultValue={rotateSpeed}/>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        rotateSpeed: state.rotateSpeed
    }
}

export default connect(mapStateToProps)(SlidersWrapContainer)