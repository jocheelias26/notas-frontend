import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "semantic-ui-react";
import LoginForm from "./pages/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <LoginForm />
      </div>
    </>
  );
}

export default App;
