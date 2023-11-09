import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeScratcher, buyScratcher } from "../features/scratcherSlice";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 8px;
  width: 100%;
  max-width: 100%;
  padding: 16px;
  box-sizing: border-box;
`;

const Card = styled.div`
  width: 175px;
  background: #f0f0f0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  font-family: "Verdana", Arial, sans-serif;
  cursor: pointer;
  transition: transform 0.1s;
  transform-origin: center bottom;

  &:active {
    transform: scale(0.95);
  }
`;

const TopBar = styled.div`
  background: linear-gradient(to bottom, #0070c9, #005aa6);
  color: white;
  padding: 10px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const TotalCost = styled.p`
  font-weight: bold;
  margin-top: 20px;
`;

const TotalEarning = styled.p`
  font-weight: bold;
  margin-top: 20px;
`;

const ScratcherList = () => {
  const scratchers = useSelector((state) =>
    state.scratcher.scratcher
      .slice()
      .sort((a, b) => a.scratcherID - b.scratcherID)
  );
  const totalScratcherCost = useSelector(
    (state) => state.scratcher.totalScratcherCost
  );
  const totalEarning = useSelector((state) => state.scratcher.totalEarning);
  const dispatch = useDispatch();

  const handleRemoveScratcher = (scratcherID) => {
    dispatch(removeScratcher(scratcherID));
  };

  const handleBuyScratcher = (scratcherID) => {
    dispatch(buyScratcher(scratcherID));
  };

  return (
    <div>
      <TotalCost>
        Total Scratcher Cost: ${totalScratcherCost.toFixed(2)}
      </TotalCost>
      <TotalEarning>Total Earnings: ${totalEarning.toFixed(2)}</TotalEarning>
      <Container>
        {scratchers.map((scratcher) => (
          <Card
            key={scratcher.scratcherID}
            onClick={() => {
              handleBuyScratcher(scratcher.scratcherID);
            }}
          >
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
    </div>
  );
};

export default ScratcherList;
