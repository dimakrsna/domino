import React, { Component } from 'react'

import SliderComponent from './../components/slider-component.jsx'

export default class SlidersWrapContainer extends Component {

    foo = (val) => {
        console.log('Scale domino', val)
    }

    foo2 = (val) => {
        console.log('Anim speed', val)
    }

    render(){
        return <div className="sliders-wrap">
            <SliderComponent title="Scale domino" handleChange={this.foo} />
            <SliderComponent title="Anim speed" handleChange={this.foo2}/>
        </div>
    }
}