import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.component.js";
import ExerciseList from "./components/ExerciseList.component.js";
import EditExercise from "./components/EditExercise.component.js";
import CreateExercise from "./components/CreateExercise.component.js";
import CreateUser from "./components/CreateUser.component.js";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
