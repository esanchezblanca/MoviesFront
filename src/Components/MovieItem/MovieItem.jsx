import React, { Component } from 'react';
import './MovieItem.css'


class MovieItem extends Component {
    
    constructor(props) {
        super(props);

    }
 
     callDetail(movie){
        console.log(this.props);
         this.props.history.push('/detailed');
        localStorage.setItem('movieDetail',JSON.stringify(movie));
    }

    render() {
        return (
            <div className="divFilms">
                <div >
                    <img src={`https://image.tmdb.org/t/p/w300${this.props.item.poster_path}`} alt={this.props.item.title} />
                    <p>ID: {this.props.item.id} </p>
                    <p>Title: {this.props.item.title} </p>
                    <button className="detailBtn" onClick={()=>this.callDetail(this.props.item)}> Detailed view </button>
                </div>
                
                
            </div>
        )
    }
}

export default MovieItem;