import { createSlice } from "@reduxjs/toolkit";

const initialScratcherState = {
  scratcher: [
    {
      scratcherID: 1,
      name: "Lucky Scratch",
      price: 2.5,
      scratcherAmount: 1000,
    },
    {
      scratcherID: 2,
      name: "Winning Streak",
      price: 3.0,
      scratcherAmount: 750,
    },
    {
      scratcherID: 3,
      name: "Golden Ticket",
      price: 5.5,
      scratcherAmount: 500,
    },
    {
      scratcherID: 4,
      name: "Diamond Jackpot",
      price: 10.0,
      scratcherAmount: 300,
    },
    {
      scratcherID: 5,
      name: "Treasure Hunt",
      price: 2.0,
      scratcherAmount: 1200,
    },
    {
      scratcherID: 6,
      name: "Cash Bonanza",
      price: 4.0,
      scratcherAmount: 600,
    },
    {
      scratcherID: 7,
      name: "Double Win",
      price: 3.5,
      scratcherAmount: 800,
    },
    {
      scratcherID: 8,
      name: "Golden Ticket Deluxe",
      price: 6.0,
      scratcherAmount: 400,
    },
    {
      scratcherID: 9,
      name: "Mega Money",
      price: 5.0,
      scratcherAmount: 550,
    },
    {
      scratcherID: 10,
      name: "Fortune Fever",
      price: 4.5,
      scratcherAmount: 700,
    },
  ],
  totalEarning: 0,
  totalScratcherCost: 0,
};

const scratcherSlice = createSlice({
  name: "scratcher",
  initialState: initialScratcherState,
  reducers: {
    addScratcher: (state, action) => {
      state.scratcher.push(action.payload);
    },

    removeScratcher: (state, action) => {
      const scratcherIDToRemove = action.payload;
      state.scratcher = state.scratcher.filter(
        (scratcher) => scratcher.scratcherID !== scratcherIDToRemove
      );
    },
  },
});

export const { addScratcher, removeScratcher } = scratcherSlice.actions;

export default scratcherSlice.reducer;
