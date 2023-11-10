import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadScratchers, clearScratchers } from "../features/scratcherSlice";
import AddScratcherForm from "./AddScratcherForm";

const DataManagement = () => {
  const dispatch = useDispatch();
  const scratchers = useSelector((state) => state.scratcher.scratcher);

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSaveScratchers = () => {
    localStorage.setItem("savedScratchers", JSON.stringify(scratchers));
  };

  const handleLoadScratchers = () => {
    const savedScratchers = JSON.parse(localStorage.getItem("savedScratchers"));

    if (Array.isArray(savedScratchers)) {
      dispatch(loadScratchers(savedScratchers));
    }
  };

  const handleClearScratchers = () => {
    dispatch(clearScratchers());
  };

  return (
    <div>
      <h2>Scratcher Management</h2>
      <button onClick={handleShow}>Add Scratcher</button>{" "}
      {/* Button to open the modal */}
      <button onClick={handleSaveScratchers}>Save Scratchers</button>
      <button onClick={handleLoadScratchers}>Load Scratchers</button>
      <button onClick={handleClearScratchers}>Clear Scratchers</button>
      {/* Render the AddScratcherForm component */}
      <AddScratcherForm showModal={showModal} handleClose={handleClose} />
    </div>
  );
};

export default DataManagement;
