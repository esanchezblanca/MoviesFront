import React, { Component } from 'react';
import './MovieItem.css'

class MovieItem extends Component {
    constructor(props) {
        super(props)

    }

    // pageForward = () => {
    //     this.setState(prevState => ({ page: prevState.page + 1 }))
    //     axios.get(`https://rickandmortyapi.com/api/character?page=${this.state.page}`)
    //         .then((api) => {
    //             console.log(api.data)
    //             this.setState({ characters: api.data.results })
    //         })
    //         .catch((err) => console.log(err))
    //     console.log(this.state.page)
    // }

    // pageBack = () => {
    //     this.setState(prevState => ({ page: prevState.page - 1 }))
    //     console.log(this.state.page)
    // }

    render() {
        return (
            <div className="divFilms">
                <div>
                    <img src={`https://image.tmdb.org/t/p/w300${this.props.item.poster_path}`} alt={this.props.item.title} />
                    <p>ID: {this.props.item.id} </p>
                    <p>Title: {this.props.item.title} </p>
                    <button> Detailed view </button>
                </div>
                
            </div>
        )
    }
}

export default MovieItem;