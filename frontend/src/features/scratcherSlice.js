import { createSlice } from "@reduxjs/toolkit";

const initialScratcherState = {
  scratcher: [],
  totalEarning: 0,
  totalScratcherCost: 0,
};

const scratcherInventory = {
  1: 250,
  2: 100,
  3: 100,
  5: 80,
  10: 50,
  20: 30,
  30: 20,
};

const scratcherSlice = createSlice({
  name: "scratcher",
  initialState: initialScratcherState,
  reducers: {
    addScratcher: (state, action) => {
      const { scratcherID, name, price } = action.payload;

      // Determine the scratcherAmount based on the price
      const scratcherAmount = scratcherInventory[price] || 0;

      state.scratcher.push({
        scratcherID,
        name,
        price,
        scratcherAmount,
      });

      // Update only totalScratcherCost when adding a scratcher
      state.totalScratcherCost += price * scratcherAmount;
    },
    removeScratcher: (state, action) => {
      const scratcherIDToRemove = action.payload;
      const removedScratcher = state.scratcher.find(
        (s) => s.scratcherID === scratcherIDToRemove
      );
      if (removedScratcher) {
        state.scratcher = state.scratcher.filter(
          (scratcher) => scratcher.scratcherID !== scratcherIDToRemove
        );
        state.totalEarning -= removedScratcher.price;
        state.totalScratcherCost -= removedScratcher.price;
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
          state.totalScratcherCost -= scratchedScratcher.price;
        }
      }
    },
  },
});

export const { addScratcher, removeScratcher, buyScratcher } =
  scratcherSlice.actions;

export default scratcherSlice.reducer;
