import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getExercises, deleteExercise } from "../services/Exersice";

const Exercise = (props) => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.exercise._id}>edit</Link> |{" "}
      <a
        href="/"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);

    this.state = { exercises: [] };
  }

  componentDidMount() {
    getExercises()
      .then((data) => {
        this.setState({ exercises: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteExercise = (id) => {
    deleteExercise(id)
      .then((data) => {
        console.log(data);
        this.setState({
          exercises: this.state.exercises.filter((el) => el._id !== id),
        });
      })
      .catch((error) => console.log(error));
  };

  exerciseList() {
    return this.state.exercises.map((currentexercise) => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={this.deleteExercise}
          key={currentexercise._id}
        />
      );
    });
  }

  render() {
    return (
      <div className="main-table">
        <h3>Logged Exercises</h3>
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}
