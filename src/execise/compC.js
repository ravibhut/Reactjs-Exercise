import React, { Component } from 'react'
import ComponentE from './compE'

class ComponentC extends Component {
    render() {
        return (
            <div>
                <h1> Component C --> parent</h1>
                <ComponentE />
            </div>
        )
    }
}

export default ComponentC