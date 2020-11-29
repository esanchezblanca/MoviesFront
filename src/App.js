import MovieList from './Containers/MovieList/MovieList';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Detailed from './Components/Detailed/Detailed';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/home" component={Home} exact />
          <Route path="/populares" component={MovieList} exact />
          <Route path="/detailed" component={Detailed} exact />


          <Link to="/home" component={Home} exact></Link>
        </Switch>

      </BrowserRouter>



      
    </div>
  );
}

export default App;
