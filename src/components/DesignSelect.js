import React from "react";

const DesignSelect = ({ handleChangeBg, handleChangeText }) => {
  return (
    <div style={{ display: "inline-flex", flexDirection: "column" }}>
      <label>Choose your background color</label>
      <select onChange={handleChangeBg}>
        <option value="808080">default</option>
        <option value="FFFF00">yellow</option>
      </select>
    </div>
  );
};

export default DesignSelect;
