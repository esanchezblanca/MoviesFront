import React, { Component } from 'react';
import './Home.css';
import cabecera from '../Images/LogoBig.png';


class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                    <img src={cabecera} className="cabecera"></img>
                    <h1 className="introPage">Bienvenido a Popular Movies Database</h1>
                    <h3 className="subtitle">La web que te sugiere las películas más vistas del momento</h3>
               


            </div>
        )
    }
}
export default Home;
