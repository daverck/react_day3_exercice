import React, { Component } from 'react'
import style from './myform.module.css'

export default class myform extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: "",
             city: "",
             comment: ""
        }
    }
    
    handleSubmit(e){
        e.preventDefault();

        console.log(this.state);

        alert(`Merci ${this.state.name} de ${this.state.city}`);

        this.setState({ name: "",
                        city: "",
                        comment: ""});
    }

    handleChange(e){
        this.setState({[e.target.id]: e.target.value});
    }

    handleNameChange(e){
        let nameUpdate = e.target.value;
        this.setState({name: nameUpdate});
        // console.log(nameUpdate);
    }
    
    // handleCityChange(e){
    //     this.setState({city: e.target.value});
    // }

    // handleCommentChange(e){
    //     this.setState({comment: e.target.value});
    // }
    
    
    render() {
        const {name, city, comment} = this.state;

        return (
            <div className="card p-3 bg-light m-2">
                <h1>Form demo</h1>
                
                <form action="" onSubmit={(e) => this.handleSubmit(e)} className="mt-5">
                    <h4>Hello {name || "Stranger"}</h4>

                    <div className="form-group">
                        <label htmlFor="name">Votre nom</label>
                        <input value={name} onChange={(e) => this.handleChange(e)} type="text" name="name" id="name" placeholder="Votre nom" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="city">D'où venez-vous ?</label>
                        <select value={city} name="city" id="city" onChange={(e) => this.handleChange(e)} className="form-control">
                            <option value="" disabled selected hidden>Choisir une ville</option>
                            <option value="bruxelles">bruxelles</option>
                            <option value="londre">londre</option>
                            <option value="paris">paris</option>
                            <option value="tokyo">tokyo</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="comment">Commentaire</label>
                        <textarea name="commet" id="comment" placeholder="Commentaire" onChange={(e) => this.handleChange(e)} cols="30" rows="10" className="form-control"  value={comment}></textarea>
                    </div>
                    
                    <button type="submit" className="btn btn-danger">Submit</button>
                    
                </form>
            </div>
        )
    }
}
