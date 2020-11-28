import React, { Component } from 'react';
import './MovieItem.css'

class MovieItem extends Component {
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div className="divFilms">
                <img src={`https://image.tmdb.org/t/p/w300${this.props.item.poster_path}`} alt={this.props.item.title}/>
                <p>ID: {this.props.item.id} </p>
                <p>Title: {this.props.item.title} </p>
                <button> Detailed view </button>
            </div>
        )
    }
}

export default MovieItem;