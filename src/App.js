import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Login} />
      </div>
    </Router>
  );
}

export default App;
