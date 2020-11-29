import React, {Component} from 'react';
import './Detailed.css';

class Detailed extends Component{
    constructor(props){
        super(props)
        this.state = {
            peliculaDetallada: {}
        }
    }

    componentDidMount(){
        let data = JSON.parse(localStorage.getItem('movieDetail'))
        this.setState({peliculaDetallada: data})
        
    }

    backToList(){
        this.props.history.push('/populares')
    }

    showMovieDet(){
        if(this.state.peliculaDetallada?.id){
            return(
                <div >
                    <div className="peliculaDetail">
                        
                        <div >Título original: {this.state.peliculaDetallada.title} </div>
                        <div className="fotoDescripcion">
                            <img alt={this.state.peliculaDetallada.title} src={`https://image.tmdb.org/t/p/w300${this.state.peliculaDetallada.poster_path}`}></img>
                            <div className="plot">Sinopsis: {this.state.peliculaDetallada.overview} </div>
                        </div>
                      
                    <div>Fecha de estreno:{this.state.peliculaDetallada.release_date} </div>
                    <div>Valoración: {this.state.peliculaDetallada.vote_average}</div>
                    </div>
                    <button onClick={()=> this.backToList()}>Volver a la lista</button>
                </div>
            )
        }else {
            return <div>Cargando lista</div>
        }
    }


    render(){
        return(
            <div className="todaInfo">
                {this.showMovieDet()}
                
            </div>
        )
    }
}
export default Detailed;