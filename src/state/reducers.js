import * as types from "./actionTypes";
const initialTodo = {
  initialTaskList: [
    {
      title: "Finish MVP",
      task: "Wire REDUX",
      setDate: "Today",
      user_id: "4"
    }
  ],
  currentId: null
};


export const toDoReducer = (todo = initialTodo, action) => {
  switch (action.type) {
    case types.GET_TODOS:
      return { ...todo, initialTaskList: action.payload };
    case types.ADD_TODO:
      return {...todo, initialTaskList: todo.initialTaskList.concat(action.payload)};
    case types.DELETE_TODO:
      return {...todo, initialTaskList: todo.initialTaskList.filter(item => {
        return item.id !== action.payload;
      })};
    case types.UPDATE_START:
      return { ...todo, currentId: action.payload };
    case types.UPDATE_TODO:
      // console.log(todo)
      // const newT = {...todo}
    return {...todo, initialTaskList: todo.initialTaskList.map(item => {
        if(action.payload.id === item.id ){
return action.payload
        } else {
          return item;
        }
       
      }), currentId:null
    };
    default:
      return todo;
  }
};

const initialToDoFormValues = {
  title: "",
  task: "",
  notes: "something",
  setDate: "2020-10-24",
  completed: false
};

export const taskFormReducer = (form = initialToDoFormValues, action) => {
  switch (action.type) {
    case types.INPUT_CHANGE:
      debugger
      return {
        ...form,
        [action.payload.name]: action.payload.value, completed: (action.payload.checked) ? "true" : "false"
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
