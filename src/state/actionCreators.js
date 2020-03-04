import * as types from "./actionTypes";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const getTodoList = () => dispatch => {
  debugger
  axiosWithAuth()
    .get("/todo/tasks")
    .then(res => {
      const todos = res.data.tasks;
      dispatch({
        type: types.GET_TODOS,
        payload: todos
      });
    })
    .catch(err => {debugger});
};

export const postNewTask = newTaskData => dispatch => {
  const userId = window.localStorage.getItem("userId")
  axiosWithAuth()
    .post(`/todo/users/${userId}/tasks`, newTaskData)
    .then(res => {
      dispatch({
        type: types.GET_TODOS,
        payload: res.data
      });
    })
    .catch(err => err);
};

export const deleteTask = (taskId, item) => dispatch => {
  axiosWithAuth()
    .delete("/todo/tasks/" + taskId)
    .then(res => {
      item.filter(task => task.id !== taskId);
      dispatch({
        type: types.GET_TODOS,
        payload: res.data
      });
    })
    .catch(err => err);
};

export const updateTask = (taskId, taskToUpdate) => dispatch => {
  axiosWithAuth()
    .put(`/todo/tasks/${taskId}`, taskToUpdate)
    .then(res => {
    })
    .catch(err => err);
};

export const inputChange = (name, value) => {
  return {
    type: types.INPUT_CHANGE,
    payload: {
      name,
      value
    }
  };
};

export const submit = () => {
  return {
    type: types.SUBMIT
  };
};

export const searchInputChange = (name, value) => {
  return {
    type: types.SEARCH_INPUT_CHANGE,
    payload: {
      name,
      value
    }
  };
};
