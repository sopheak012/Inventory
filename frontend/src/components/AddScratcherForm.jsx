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
  const [scratcherID, setScratcherID] = useState("");
  const [scratcherNumber, setScratcherNumber] = useState(0);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !scratcherID) {
      setError("Name and Scratcher ID are required.");
      return;
    }

    dispatch(
      addScratcher({ scratcherID, name, price: scratchPrice, scratcherNumber })
    );
    setName("");
    setScratcherID("");
    setScratchPrice(1);
    setError(null);
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add New Scratcher</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            {error && <p style={{ color: "red" }}>{error}</p>}
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
            <Label htmlFor="scratcherNumber">Scratcher Number:</Label>
            <Input
              type="number"
              id="scratcherNumber"
              value={scratcherNumber}
              onChange={(e) => setScratcherNumber(parseInt(e.target.value, 10))}
            />

            <Label>Scratcher Price:</Label>
            <RadioGroup>
              {[1, 2, 3, 5, 10, 20, 30].map((option) => (
                <RadioLabel key={option}>
                  <RadioInput
                    type="radio"
                    name="price"
                    value={option}
                    checked={scratchPrice === option}
                    onChange={() => setScratchPrice(option)}
                  />
                  ${option}
                </RadioLabel>
              ))}
            </RadioGroup>
            <Button type="submit">Add Scratcher</Button>
          </Form>
        </FormContainer>
      </Modal.Body>
    </Modal>
  );
};

export default AddScratcherForm;
