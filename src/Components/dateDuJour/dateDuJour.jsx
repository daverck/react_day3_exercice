import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class dateDuJour extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    

    constructor(props) {
        super(props)
    
        this.state = {
            date: new Date(),
            date_options: { weekday: "long",
                            day: "numeric",
                            month: "long",
                            year: "numeric"}
        }
    }
    

    render() {
        // const {date, date_options} = this.state;
        return (
            <p>
                Nous sommes le {this.state.date.toLocaleDateString('fr-BE', this.state.date_options)}
            </p>
        )
    }
}
