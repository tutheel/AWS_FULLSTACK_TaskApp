import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AddTaskForm } from "./Components/AddTaskForm";
import Task from "./Components/Task";
// import axios from "axios";
// import { useState,useEffect } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const task = {
  id: "1",
  name: "do dishes",
  completed: false,
};

export default function App() {
  // const [task, setTask] = useState({})

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AddTaskForm />
      <Task task={task} />
    </ThemeProvider>
  );
}
