import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Card } from "semantic-ui-react";
import LoginForm from "./pages/Login";
import Register from "./pages/Register";
import axios from "axios";
import Task from "./pages/Task";
const BACK_URI = import.meta.env.VITE_BACKEND_URL;

function App() {
  const [status, setStatus] = useState(false);
  const [toogle, setToogle] = useState(false);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    axios
      .get(`${BACK_URI}/task`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setStatus(true);
        setTasks(res.data.data);
      })
      .catch((err) => {
        if (err.response.status) {
          setStatus(false);
        }
      });
  }, []);

  if (status) {
    return <Task tasks={tasks} />;
  }

  if (toogle) {
    return <Register toogle={toogle} setToogle={setToogle} />;
  }

  return <LoginForm toogle={toogle} setToogle={setToogle} />;
}

export default App;
