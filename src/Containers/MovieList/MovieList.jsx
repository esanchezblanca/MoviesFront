import React, { Component } from 'react';
import axios from 'axios';

import './MovieList.css';
import MovieItem from '../../Components/MovieItem/MovieItem';

class MovieList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            page: 1
        }
    }

    componentDidMount() {
        this.getMovieList();
    }

    getMovieList(page) {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=479c2920a277283ba2e63633bbcc98d6&page=${page}`)
            .then(api => {
                console.log(api)
                this.setState({ movies: api.data.results })
            })
            .catch(err => console.log(err));
    }


    pageBack = () => {
        this.setState(prevState => ({ page: prevState.page - 1 }), () => {
            this.getMovieList(this.state.page);
            console.log(this.state.page)
        })

    }

    pageForward = () => {
        this.setState(prevState => ({ page: prevState.page + 1 }), () => {
            this.getMovieList(this.state.page);
            console.log(this.state.page)
        })

    }

     callDetail(movie){
        console.log(this.props);
         this.props.history.push('/detailed');
        localStorage.setItem('movieDetail',JSON.stringify(movie));
    }

    render() {
        return (
            <div className="globalDiv">
                <div className="pageBtn">
                    <button onClick={() => this.pageBack()}>Atras</button>
                    <button onClick={() => this.pageForward()}>Siguiente</button>
                </div>
                <div className="grid">
                    {
                        this.state.movies.map(
                            item => <div className="divFilms">
                            <div>
                                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title} />
                                <p>ID: {item.id} </p>
                                <p>Title: {item.title} </p>
                                <button className="detailed" onClick={()=>this.callDetail(item)}> Detailed view </button>
                            </div>
                            
                        </div>
                        )
                    }
                </div>
                <div className="pageBtn">
                    <button onClick={() => this.pageBack()}>Atras</button>
                    <button onClick={() => this.pageForward()}>Siguiente</button>
                </div>
            </div>
        )
    }

}

export default MovieList;