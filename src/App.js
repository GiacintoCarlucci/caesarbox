import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home/HOME';
import Caesar from './Caesar/CAESAR';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/caesar' component={Caesar}/>
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  );
}

export default App;
