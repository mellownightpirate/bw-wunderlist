import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { withRouter } from "react-router-dom";
import Todo from "./Todo";
import PopOver from "./Popover";
import {
  getTodoList,
  postNewTask,
  inputChange,
  submit,
  searchInputChange,
  deleteTask,
  updateTask
} from "../state/actionCreators";
import { connect } from "react-redux";

const TodoList = ({
  toDoArray,
  getTodoList,
  postNewTask,
  inputChange,
  submit,
  formTask,
  formSearch,
  searchInputChange,
  deleteTask,
  updateTask,
  ...props
}) => {
  const options = ["Completed", "Daily", "Monthly"];
  const ITEM_HEIGHT = 48;

  const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345
    },
    typography: {
      padding: theme.spacing(2)
    }
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl("");
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const classes = useStyles();

  const onLogout = event => {
    event.preventDefault();
    window.localStorage.removeItem("token");
    props.history.push("/");
  };

  useEffect(() => {
    debugger;
    getTodoList();
  }, []);

  const onFormValueChange = event => {
    inputChange(event.target.name, event.target.value);
  };

  const onTaskFormSubmit = (event, form) => {
    event.preventDefault();
    const data = {
      title: form.title,
      completed: form.completed
    };
    postNewTask(data);
    submit();
  };

  const onSearchQueryChange = event => {
    searchInputChange(event.target.name, event.target.value);
  };

  // const searchingFor = toDoArray.filter(task => {
  //   debugger
  //   return task.title.toLowerCase().includes(formSearch.searchInput.toLowerCase())
  // }

  // );

  return (
    <div>
      <div className="header">
        {console.log(toDoArray, "seeing what this is")}
        <div>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: 200
              }
            }}
          >
            {options.map(option => (
              <MenuItem
                key={option}
                selected={option === "Pyxis"}
                onClick={handleClose}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>

        <TextField
          className="searchbox"
          style={{ width: "400px" }}
          id="outlined-basicc"
          label="Search tasks..."
          variant="outlined"
          name="searchInput"
          value={formSearch.searchInput}
          onChange={onSearchQueryChange}
          type="text"
        />
        <Button
          variant="contained"
          className={classes.button}
          type="submit"
          onClick={onLogout}
        >
          LogOut
        </Button>
      </div>
      <PopOver
        onFormValueChange={onFormValueChange}
        onTaskFormSubmit={onTaskFormSubmit}
        formTask={formTask}
      />
      {toDoArray.map(item => {
        return (
          <div key={item.id}>
            <Todo
              taskItem={item}
              deleteTask={deleteTask}
              updateTask={updateTask}
              formTask={formTask}
            />
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    toDoArray: state.toDoList,
    formTask: state.taskForm,
    formSearch: state.searchForm
  };
};

export default connect(mapStateToProps, {
  getTodoList,
  postNewTask,
  inputChange,
  submit,
  searchInputChange,
  deleteTask,
  updateTask
})(withRouter(TodoList));
