import './home.css';
import QuestionsPage from './QuestionsPage';
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import Personality from "./personality";
import Home from "./home";
import Charts from "./charts"
import UserCharts from "./usercharts"
import { useState } from 'react';
import Navbar from './navbar';
function App() {
  const [data, setData] = useState();
  return (
    <div>
      <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/test" exact ><QuestionsPage nextPageData={setData}/></Route>
          <Route path="/personality" exact ><Personality data={data} /></Route>
          <Route path="/charts"exact ><Charts /></Route>
          <Route path="/usercharts" exact ><UserCharts /></Route>
          <Redirect to="/"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
