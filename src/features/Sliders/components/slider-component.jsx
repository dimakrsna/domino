import React, { PureComponent } from 'react'
import Slider from 'react-rangeslider'

export default class SliderComponent extends PureComponent {

    state = {
        volume: this.props.defaultValue || 0
    }

    handleOnChange = (value) => {
        this.setState({
            volume: value
        })

        let { handleChange } = this.props
        handleChange && handleChange(value)
    }

    render() {
        let { title, handleChangeComplete, min, max } = this.props

        return <div className="slider">
            <Slider
                value={this.state.volume}
                orientation="horizontal"
                onChange={this.handleOnChange}
                onChangeComplete={handleChangeComplete && (() => { handleChangeComplete(this.state.volume) })}
                min={min && min}
                max={max && max}
                tooltip={false}
            />
            <span className="slider__subtitle">{title || 'Slider'}</span>
        </div>
    }
}