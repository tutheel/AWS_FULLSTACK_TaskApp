import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const AddTaskForm = () => {
  const [newTask, setNewTask] = useState("");

  const addNewTask = () => {
    console.log("add new task clicked");
    setNewTask("");
  };
  return (
    <div>
      <Typography align="center" variant="h3" paddingTop={6} paddingBottom={8}>
        My Task List
      </Typography>
      <div className="addTaskForm">
        <TextField
          size="small"
          label="Task"
          variant="outlined"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <Button
          disabled={!newTask.length}
          variant="outlined"
          onClick={addNewTask}
        >
          <AddIcon />
        </Button>
      </div>
    </div>
  );
};
