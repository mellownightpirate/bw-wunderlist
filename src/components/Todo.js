import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PopOverUpdate from "./PopoverUpdate";

const Todo = props => {
  const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345
    },
    typography: {
      padding: theme.spacing(2)
    }
  }));

  const classes = useStyles();

  return (
    <div className="task-list">
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent
            style={{
              background: props.taskItem.completed ? " #e6ffee" : "white"
            }}
          >
            <Typography
              gutterBottom
              variant="h3"
              component="h3"
              style={{
                textDecoration: props.taskItem.completed && "line-through"
              }}
            >
              {props.taskItem.title}
            </Typography>
            <Typography variant="h5" color="textSecondary" component="p">
              {props.taskItem.task}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Due for : {props.taskItem.setDate}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Created at : {props.taskItem.created_at}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Updated at : {props.taskItem.updated_at}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Frequency : {props.taskItem.notes}
            </Typography>

            <p>
              Status:
              {props.taskItem.completed ? "Completed" : " Incomplete"}
            </p>

            <button
              style={{
                fontWeight: "bold"
              }}
              onClick={() =>
                props.updateTask(props.taskItem.id, props.formTask)
              }
            >
              Update
            </button>

            <button
              style={{
                fontWeight: "bold"
              }}
              onClick={() => props.deleteTask(props.taskItem.id)}
            >
              Delete
            </button>

            {props.currentId == props.taskItem.id ? (
              <div>
                <PopOverUpdate
                  onFormValueChange={props.onFormValueChange}
                  onTaskFormSubmit={props.onTaskFormSubmit}
                  formTask={props.formTask}
                  toDoArray={props.toDoArray}
                />{" "}
              </div>
            ) : (
              <div></div>
            )}
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
    </div>
  );
};

export default Todo;
