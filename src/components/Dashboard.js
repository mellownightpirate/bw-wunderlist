import React from "react";
import Login from "./Login";
import Register from "./Register";
import { Route } from "react-router-dom";
import TodoList from "../components/TodoList";
import PrivateRoute from "../utils/PrivateRoute";

function Dashboard(props) {


  return (
    <div className="wrapper">
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute exact path="/todo-list" component={TodoList} />
    </div>
  );
}

export default Dashboard;