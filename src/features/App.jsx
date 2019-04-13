import React, { Component } from 'react'

import HeaderComponent from './Header/containers/header-container'
import DominoContainer from './Domino/containers/domino-container'
import SlidersWrapContainer from './Sliders/containers/sliders-wrap-container'

export class App extends Component {

    render() {
        return (
            <section className="wrapper">
               <HeaderComponent />
               <DominoContainer />
               <SlidersWrapContainer />
            </section>
        )
    }
}
