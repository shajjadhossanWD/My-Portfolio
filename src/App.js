import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProjectDetails from './component/ProjectDetails/ProjectDetails';

function App() {
  return (
    <div className="app">
     <Router>
        <Switch>
          <Route exact path="/">
           <Home></Home>
          </Route>
          <Route path="/projects/:name">
            <ProjectDetails></ProjectDetails>
          </Route>
        </Switch>
     </Router>
    
    </div>
  );
}

export default App;
