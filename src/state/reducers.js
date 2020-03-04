import * as types from "./actionTypes";

const initialTaskList = [
  {
    title: "Finish MVP",
    task: "Wire REDUX",
    setDate: "Today",
    user_id: "4"
  }
];

export const toDoReducer = (todo = initialTaskList, action) => {
  switch (action.type) {
    case types.GET_TODOS:
      debugger
      return action.payload;
    default:
      return todo;
  }
};

const initialToDoFormValues = {
  title: "",
  task: "",
  notes: "something",
  setDate: "2020-10-24",
  completed: false,
};

export const taskFormReducer = (form = initialToDoFormValues, action) => {
  switch (action.type) {
    case types.INPUT_CHANGE:
      return {
        ...form,
        [action.payload.name]: action.payload.value
      };
    case types.SUBMIT:
      return initialToDoFormValues;
    default:
      return form;
  }
};

const searchQueryValue = {
  searchInput: ""
};

export const searchFormReducer = (searchValue = searchQueryValue, action) => {
  switch (action.type) {
    case types.SEARCH_INPUT_CHANGE:
      return {
        ...searchValue,
        [action.payload.name]: action.payload.value
      };
    case types.SUBMIT:
      return searchQueryValue;
    default:
      return searchValue;
  }
};
