import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
const BACK_URI = import.meta.env.VITE_BACKEND_URL;
const LoginForm = ({ toogle, setToogle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    axios
      .post(`${BACK_URI}/auth/login`, {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("userToken", res.data.token);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          ¡Inicia sesión Notas el david!
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              onChange={({ target: { value } }) => setEmail(value)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={({ target: { value } }) => setPassword(value)}
            />

            <Button
              disabled={!email.trim() || !password.trim()}
              onClick={handleLogin}
              color="teal"
              fluid
              size="large"
            >
              Iniciar sesión
            </Button>
          </Segment>
        </Form>
        <Message>
          ¿No tienes cuenta aún?{" "}
          <a href="#" onClick={() => setToogle(!toogle)}>
            Crear una cuenta
          </a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;
