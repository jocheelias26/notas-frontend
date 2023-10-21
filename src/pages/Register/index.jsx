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
const Register = ({ toogle, setToogle }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    axios
      .post(`${BACK_URI}/auth/register`, {
        name,
        email,
        password,
      })
      .then(() => {
        alert("Registro fue exitoso, inicia sesión con tu usuario!");
        window.location.reload();
      });
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          ¡Registrate en Notas el david!
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="pencil"
              iconPosition="left"
              placeholder="Nombre"
              onChange={({ target: { value } }) => setName(value)}
            />
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
              disabled={!name.trim() || !password.trim() || !email.trim()}
              onClick={handleRegister}
              color="teal"
              fluid
              size="large"
            >
              Crear cuenta
            </Button>
          </Segment>
        </Form>
        <Message>
          ¿Ya tienes cuenta aún?{" "}
          <a href="#" onClick={() => setToogle(!toogle)}>
            Iniciar sesión
          </a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Register;
