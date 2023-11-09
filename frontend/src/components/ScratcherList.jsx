import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeScratcher } from "../features/scratcherSlice";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* Start from the left */
  gap: 8px; /* Adjust the gap between cards */
  width: 100%;
  max-width: 100%;
  padding: 16px;
  box-sizing: border-box;
`;

const Card = styled.div`
  width: 175px; /* Fixed width for the scratcher cards */
  background: #f0f0f0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  font-family: "Verdana", Arial, sans-serif;
`;

const TopBar = styled.div`
  background: linear-gradient(to bottom, #0070c9, #005aa6);
  color: white;
  padding: 10px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Button = styled.button`
  background-color: #0070c9;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-family: "Helvetica Neue", Arial, sans-serif;
`;

const Heading = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  font-family: "Helvetica Neue", Arial, sans-serif;
`;

const ScratcherList = () => {
  const scratchers = useSelector((state) => state.scratcher.scratcher);
  const dispatch = useDispatch();

  const handleRemoveScratcher = (scratcherID) => {
    // Dispatch the removeScratcher action with the scratcherID
    dispatch(removeScratcher(scratcherID));
  };

  return (
    <Container>
      {scratchers.map((scratcher) => (
        <Card key={scratcher.scratcherID}>
          <TopBar>
            <Heading>Scratcher ID: {scratcher.scratcherID}</Heading>
          </TopBar>
          <Content>
            <p>Name: {scratcher.name}</p>
            <p>Price: ${scratcher.price}</p>
            <p>Available: {scratcher.scratcherAmount}</p>
          </Content>
        </Card>
      ))}
    </Container>
  );
};

export default ScratcherList;
