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
      // item.filter(task => task.id !== taskId);
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
 debugger
  axiosWithAuth()
    .put(`/todo/tasks/${item.id}`, {title: item.title, completed: item.completed})
    .then(res => {
      debugger
    })
    .catch(err => {debugger});
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
