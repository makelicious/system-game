import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import "./App.css";
import PrimaryButton from "./components/Button";
import Input from "./components/Input";

const App: React.FC = () => {
  return (
    <div className="App">
      <Form>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <PrimaryButton onClick={() => console.log("terve")} size={"large"}>
          Moro
        </PrimaryButton>
      </Form>
    </div>
  );
};

const Form = styled.form``;

export default App;
