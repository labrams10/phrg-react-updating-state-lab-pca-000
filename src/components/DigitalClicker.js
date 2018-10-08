import React from 'react'

export default class DigitalClicker extends React.Component {
    constructor() {
        super()

        this.state = {
            timesClicked: 0
        }
    }
    addOneToTimesClicked = () => {
        this.setState({
            timesClicked: ++this.state.timesClicked
        })
    }
    render() {
        return(
            <div>
                <button onClick={this.addOneToTimesClicked}>{this.state.timesClicked}</button>
            </div>
        )
    }
}