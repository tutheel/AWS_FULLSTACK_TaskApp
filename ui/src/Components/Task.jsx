/* eslint-disable react/prop-types */
import { Checkbox, Typography, Button, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import UpdateTaskForm from "./UpdateTaskForm";
import classnames from "classnames";

import axios from "axios";
import { API_URL } from "../utils";

//error here
export const Task = ({ task, fetchTasks }) => {
  const { id, name, completed } = task;
  const [isComplete, setIsComplete] = useState(completed);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleUpdateTaskCompletion = async () => {
    try {
      await axios.put(API_URL, {
        id,
        name,
        completed: !isComplete,
      });
      setIsComplete(prev => !prev);
    } catch (error) {
      console.log(`Error Updating New Task: ${error}`);
    }
  };
  const handleDeleteTask = async () => {
    try {
      //error here
      await axios.delete(`${API_URL}/${task.id}`);
      await fetchTasks();
    } catch (error) {
      console.log(`Error Updating New Task: ${error}`);
    }
  };

  return (
    <div className="task">
      <div
        className={classnames("flex", {
          done: isComplete,
        })}
      >
        <Checkbox checked={isComplete} onChange={handleUpdateTaskCompletion} />
        <Typography variant="h5" paddingTop={0.5}>
          {name}
        </Typography>
      </div>
      <div className="taskButtons">
        <Box paddingLeft={2}>
          <Button
            size="small"
            variant="contained"
            onClick={() => setIsDialogOpen(true)}
          >
            <EditIcon />
          </Button>
        </Box>
        <Box paddingLeft={1}>
          <Button
            size="small"
            color="error"
            variant="contained"
            onClick={handleDeleteTask}
          >
            <DeleteIcon />
          </Button>
        </Box>
      </div>
      <UpdateTaskForm
        fetchTasks={fetchTasks}
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        task={task}
      />
    </div>
  );
};
