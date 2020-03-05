import * as types from "./actionTypes";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const getTodoList = () => dispatch => {
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
      debugger
      dispatch({
        type: types.ADD_TODO,
        payload: res.data
      });
    })
    .catch(err => {debugger});
};

export const deleteTask = (taskId) => dispatch => {
  axiosWithAuth()
    .delete(`/todo/tasks/${taskId}`)
    .then(res => {
      dispatch({
        type: types.DELETE_TODO,
        payload: taskId
            });
    })
    .catch(err => err);
};

export const openForm = (item) => dispatch => {
  dispatch({
    type: types.UPDATE_START,
    payload: item.id
  })
}

export const updateTask = (item) => dispatch => {
  axiosWithAuth()
    .put(`/todo/tasks/${item.id}`, {title: item.title, completed: item.completed})
    .then(res => {
      dispatch({
        type: types.UPDATE_TODO,
        payload: res.data
      })
    })
    .catch(err => {debugger});
};

export const inputChange = (name, value, checked) => {
  return {
    type: types.INPUT_CHANGE,
    payload: {
      name,
      value,
      checked
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
