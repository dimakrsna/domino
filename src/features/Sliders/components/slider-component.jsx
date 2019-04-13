import React, { PureComponent } from 'react'
import Slider from 'react-rangeslider'

export default class SliderComponent extends PureComponent {

    state = {
        volume: 0
    }

    handleOnChange = (value) => {
        this.setState({
            volume: value
        })
    }

    render() {
        let { title, handleChange } = this.props

        return <div className="slider">
            <Slider
                value={this.state.volume}
                orientation="horizontal"
                onChange={this.handleOnChange}
                onChangeComplete={handleChange && (() => { handleChange(this.state.volume) })}
                tooltip={false}
            />
            <span className="slider__subtitle">{title || 'Slider'}</span>
        </div>
    }
}