import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadScratchers } from "../features/scratcherSlice";

const DataManagement = () => {
  const dispatch = useDispatch();
  const scratchers = useSelector((state) => state.scratcher.scratcher);

  const handleSaveScratchers = () => {
    localStorage.setItem("savedScratchers", JSON.stringify(scratchers));
  };

  const handleLoadScratchers = () => {
    // Load the scratchers array from localStorage and parse it as JSON
    const savedScratchers = JSON.parse(localStorage.getItem("savedScratchers"));

    if (Array.isArray(savedScratchers)) {
      // Dispatch an action to update the scratchers in the Redux store
      dispatch(loadScratchers(savedScratchers));
    }
  };

  const handleClearScratchers = () => {
    localStorage.removeItem("savedScratchers");
  };

  return (
    <div>
      <h2>Data Management</h2>
      <button onClick={handleSaveScratchers}>Save Scratchers</button>
      <button onClick={handleLoadScratchers}>Load Scratchers</button>
      <button onClick={handleClearScratchers}>Clear Scratchers</button>
    </div>
  );
};

export default DataManagement;
