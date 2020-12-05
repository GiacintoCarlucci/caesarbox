import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home/HOME';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  );
}

export default App;
