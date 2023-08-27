import AlbumFeature from './features/Album';
import './App.css';
import { Switch, Route, NavLink } from "react-router-dom";
import TodoFeature from './features/Todo';
import NotFound from './components/NotFound';

import CounterFeature from './features/Counter';


function App() {


  return (
    <div className="App" >
      Home Page
      <p><NavLink to="/todos" activeClassName="active-menu">To Do</NavLink></p>
      <p><NavLink to="/albums" activeClassName="active">Album</NavLink></p>

      {/* <Navigate to="/todos" replace={true} /> */}

      <Switch>

        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} ></Route>
        <Route path="/albums" component={AlbumFeature } />
        <Route path="/count" component={CounterFeature } />


        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}


export default App;
