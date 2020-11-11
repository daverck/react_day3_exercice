import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class compteur extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    constructor(props) {
        super(props)
    
        this.state = {
             cpt: 0
        }

        // this.handleClickReset = this.handleClickReset.bind(this);
        // this.handleClickAdd1 = this.handleClickAdd1.bind(this);
    }
    
    handleClickReset(e){
        this.setState({cpt: 0});
    }

    handleClickAdd(e, added){
        // this.setState({cpt: this.state.cpt+1});
        // console.log(added);
        // console.log(this.state.cpt);

        this.setState((state, props) => (
            {cpt: state.cpt+added}));
    }

    handleClickMultiply(e, factor){
        this.setState((state, props) => ({cpt: state.cpt*factor}));
    }

    render() {
        return (
            <div>
                <p>{this.state.cpt}</p>
                <div>
                    <button type="button" onClick={(e) => this.handleClickReset(e) } className="btn btn-outline-danger mr-1">Reset</button>
                    <button type="button" onClick={(e) => this.handleClickMultiply(e, 2) } className="btn btn-outline-primary mr-1">*2</button>
                    <button type="button" onClick={(e) => this.handleClickAdd(e, 1) } className="btn btn-outline-primary mr-1">+1</button>
                    <button type="button" onClick={(e) => this.handleClickAdd(e, 5) } className="btn btn-outline-primary mr-1">+5</button>
                    <button type="button" onClick={(e) => this.handleClickAdd(e, 10) } className="btn btn-outline-primary mr-1">+10</button>
                    <button type="button" onClick={(e) => this.handleClickAdd(e, 100) } className="btn btn-outline-primary mr-1">+100</button>
                    <button type="button" onClick={(e) => this.handleClickAdd(e, 1000) } className="btn btn-outline-primary mr-1">+1000</button>
                </div>
            </div>
        )
    }
}


compteur.propTypes = {
    cpt: PropTypes.number

}