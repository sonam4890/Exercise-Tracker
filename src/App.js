import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateExercise from "./components/Create-exercise";
import CreateUser from "./components/Create-user";
import EditExercise from "./components/Edit-exercises";
import ExerciseList from "./components/Exercises-list";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={ExerciseList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
};

export default App;
