import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const ShortForm = () => {
  const [name, Setname] = useState("");

  const formData = (e) => {
    e.preventDefault();
    console.log(name)
  }

  return (
    <div >
      <Form onSubmit={formData} style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "5%"

      }} width={50}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control onBlur={(e) => Setname(e.target.value)} type="text" placeholder="Enter email" />
        </Form.Group>
        <Button style={{
          padding: "0 10px",
          width: "4 %",
          fontSize: "18px",
          margin: "0 2%",
          background: "red",
          color: "white"
        }} variant="none" type="submit">
          Submit
        </Button>
      </Form>
    </div >
  );
}

export default ShortForm;