import './App.css';
import QuestionsPage from './QuestionsPage';
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import Personality from "./personality";
import Home from "./home";
import Charts from "./charts"
import { useState } from 'react';
function App() {
  const [data, setData] = useState();
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" exact><Home /></Route>
          <Route path="/test" exact ><QuestionsPage nextPageData={setData}/></Route>
          <Route path="/personality" ><Personality data={data} /></Route>
          <Route path="/charts" ><Charts /></Route>
          <Redirect to="/"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
