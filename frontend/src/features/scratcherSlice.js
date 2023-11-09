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
  ],
  totalEarning: 0,
  totalScratcherCost: 0,
};

const scratcherSlice = createSlice({
  name: "scratcher",
  initialState: initialScratcherState,
  reducers: {
    addScratcher: (state, action) => {
      const { scratcherID, price, scratcherAmount } = action.payload;
      state.scratcher.push(action.payload);

      // Update totalScratcherCost and totalEarning
      state.totalScratcherCost += price * scratcherAmount;
      state.totalEarning += price * scratcherAmount;
    },

    removeScratcher: (state, action) => {
      const scratcherIDToRemove = action.payload;
      state.scratcher = state.scratcher.filter(
        (scratcher) => scratcher.scratcherID !== scratcherIDToRemove
      );

      // Update totalEarning when removing a scratcher
      const removedScratcher = state.scratcher.find(
        (s) => s.scratcherID === scratcherIDToRemove
      );
      if (removedScratcher) {
        state.totalEarning -= removedScratcher.price;
      }
    },

    buyScratcher: (state, action) => {
      const scratcherIDToScratch = action.payload;
      const scratchedScratcher = state.scratcher.find(
        (s) => s.scratcherID === scratcherIDToScratch
      );

      if (scratchedScratcher) {
        if (scratchedScratcher.scratcherAmount > 0) {
          scratchedScratcher.scratcherAmount -= 1;
          state.totalEarning += scratchedScratcher.price;
        }
      }
    },
  },
});

export const { addScratcher, removeScratcher, buyScratcher } =
  scratcherSlice.actions;

export default scratcherSlice.reducer;
