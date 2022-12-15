import React from "react";

const UserImage = ({ myCardImage }) => {
  return (
    <div style={{ display: "inline-flex", flexDirection: "column" }}>
      <img src={myCardImage} alt="Profile Pic" />
    </div>
  );
};

export default UserImage;
