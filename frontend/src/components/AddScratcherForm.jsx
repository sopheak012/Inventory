import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addScratcher } from "../features/scratcherSlice";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 16px;
  box-sizing: border-box;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #0070c9;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row; /* Change to row layout for radio buttons */
`;

const RadioLabel = styled.label`
  font-weight: bold;
`;

const RadioInput = styled.input`
  margin-right: 5px;
`;

const AddScratcherForm = ({ showModal, handleClose }) => {
  const [name, setName] = useState("");
  const [scratchPrice, setScratchPrice] = useState(1); // Default to $1
  const [scratcherID, setScratcherID] = useState(""); // Input for scratcherID
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addScratcher({ scratcherID, name, price: scratchPrice }));
    setName("");
    setScratcherID("");
    handleClose(); // Close the modal after submitting
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add New Scratcher</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="name">Name:</Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Label htmlFor="scratcherID">Scratcher ID:</Label>
            <Input
              type="number"
              id="scratcherID"
              value={scratcherID}
              onChange={(e) => setScratcherID(e.target.value)}
            />
            <Label>Scratcher Price:</Label>
            <RadioGroup>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  name="price"
                  value="1"
                  checked={scratchPrice === 1}
                  onChange={() => setScratchPrice(1)}
                />
                $1
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  name="price"
                  value="2"
                  checked={scratchPrice === 2}
                  onChange={() => setScratchPrice(2)}
                />
                $2
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  name="price"
                  value="3"
                  checked={scratchPrice === 3}
                  onChange={() => setScratchPrice(3)}
                />
                $3
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  name="price"
                  value="5"
                  checked={scratchPrice === 5}
                  onChange={() => setScratchPrice(5)}
                />
                $5
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  name="price"
                  value="10"
                  checked={scratchPrice === 10}
                  onChange={() => setScratchPrice(10)}
                />
                $10
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  name="price"
                  value="20"
                  checked={scratchPrice === 20}
                  onChange={() => setScratchPrice(20)}
                />
                $20
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  name="price"
                  value="30"
                  checked={scratchPrice === 30}
                  onChange={() => setScratchPrice(30)}
                />
                $30
              </RadioLabel>
            </RadioGroup>
            <Button type="submit">Add Scratcher</Button>
          </Form>
        </FormContainer>
      </Modal.Body>
    </Modal>
  );
};

export default AddScratcherForm;
