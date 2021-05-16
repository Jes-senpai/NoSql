
import './App.css';
import QuestionsPage from './QuestionsPage';
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import Personality from "./personality";
import Home from "./home";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" exact><Home /></Route>
          <Route path="/test" exact><QuestionsPage /></Route>
          <Route path="/personality"><Personality /></Route>
          <Redirect to="/"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
