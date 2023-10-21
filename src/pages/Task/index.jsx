import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Form, Header, Segment } from "semantic-ui-react";
const BACK_URI = import.meta.env.VITE_BACKEND_URL;
const Task = ({ tasks }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleCreateTask = () => {
    const token = localStorage.getItem("userToken");
    axios
      .post(
        `${BACK_URI}/task`,
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    window.location.reload();
  };

  return (
    <>
      <div style={{ marginBottom: 40 }}>
        <Button onClick={handleLogout} content="Cerrar sesión" color="teal" />
      </div>
      <Card.Group>
        {tasks.map((task, index) => (
          <Card
            key={index}
            header={task.title}
            meta={task.author.name}
            description={task.content}
          />
        ))}
      </Card.Group>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
        <Card>
          <Form size="large">
            <Segment stacked>
              <Header as="h2" color="teal" textAlign="center">
                ¡Crea una nota!
              </Header>
              <Form.Input
                fluid
                icon="pencil"
                iconPosition="left"
                placeholder="Titulo"
                onChange={({ target: { value } }) => setTitle(value)}
              />

              <Form.TextArea
                fluid
                icon="pencil"
                iconPosition="left"
                placeholder="Contenido"
                onChange={({ target: { value } }) => setContent(value)}
              />

              <Button
                disabled={!title.trim() || !content.trim()}
                onClick={handleCreateTask}
                color="teal"
                fluid
                size="large"
              >
                Crear nota
              </Button>
            </Segment>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Task;
