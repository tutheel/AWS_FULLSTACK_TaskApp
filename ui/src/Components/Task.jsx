import React, { useState } from "react";
import { Box, Checkbox, Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import classnames from "classnames";
import UpdateTaskForm from "./UpdateTaskForm";

const Task = ({ task }) => {
  const { id, name, completed } = task;
  const [isComplete, setIsComplete] = useState(completed);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleUpdateTaskCompletion = () => {
    setIsComplete(prev => !prev);
  };
  const handleDeleteTask = () => {
    console.log("delete Task");
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
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        task={task}
      />
    </div>
  );
};

export default Task;
