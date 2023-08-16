import React from "react";

const FilterComponent = ({ setMinValue, setMaxValue }) => {
  const [minInputValue, setMinInputValue] = React.useState("");
  const [maxInputValue, setMaxInputValue] = React.useState("");

  const handleMinInputChange = (event) => {
    setMinInputValue(event.target.value);
  };

  const handleMaxInputChange = (event) => {
    setMaxInputValue(event.target.value);
  };

  const handleApplyClick = () => {
    if (minInputValue !== "" && maxInputValue !== "") {
      setMinValue(Number(minInputValue));
      setMaxValue(Number(maxInputValue));
    }
  };

  return (
    <div>
      <div>
        <input
          type="number"
          placeholder="Min Value"
          value={minInputValue}
          onChange={handleMinInputChange}
        />
        <input
          type="number"
          placeholder="Max Value"
          value={maxInputValue}
          onChange={handleMaxInputChange}
        />
      </div>
      <button onClick={handleApplyClick}>Apply</button>
    </div>
  );
};

export default FilterComponent;
