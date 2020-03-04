import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

const PopOver = props => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div className="pop-over">
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        Add a new task
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Typography component={'span'}>
          <form noValidate autoComplete="off"></form>
          <>
          <form className="popoverForm"
            onSubmit={event => props.onTaskFormSubmit(event, props.formTask)}
          >
            <label>
              Title
              <input
                type="text"
                placeholder="Give your task a title"
                name="title"
                onChange={props.onFormValueChange}
                value={props.formTask.title}
              />
            </label>
            <label>
              Description
            <TextareaAutosize
              rowsMax={4}
              aria-label="maximum height"
              placeholder="Describe your task"
              onChange={props.onFormValueChange}
              name="task"
              value={props.formTask.task}
            />
            </label>
            <label className="container">
              Completed ?
              <input type="checkbox" name="completed" onChange={props.onFormValueChange} />
              <span className="checkmark"></span>
            </label>
            <button type="submit">Submit this task</button>
            
          </form>
          </>

        </Typography>
      </Popover>
    </div>
  );
};

export default PopOver;
