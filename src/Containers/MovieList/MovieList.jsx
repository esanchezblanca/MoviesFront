import React, { Component } from 'react';
import axios from 'axios';

import {Header} from '../../Components/Header/Header';

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

    getMovieList() {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=479c2920a277283ba2e63633bbcc98d6')
            .then(api => {
                console.log(api)
                this.setState({ movies: api.data.results})
            })
            .catch(err => console.log(err));
    }


    //Pasar páginas

    render() {
        return (
            <div>
                <Header/>
                <div className="grid">
                    {
                        this.state.movies.map(
                            item => {
                                return (
                                    <MovieItem item={item} />
                                )
                            }
                        )
                    }
                </div>
                <div>
                    <button onClick={() => this.pageBack()}>Atras</button>
                    <button onClick={() => this.pageForward()}>Siguiente</button>
                </div> 
            </div>
        )
    }
}

export default MovieList;