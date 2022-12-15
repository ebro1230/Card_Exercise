import React from "react";

const myUserDetails = ({ myCard }) => {
  return (
    <div style={{ display: "inline-flex", flexDirection: "column" }}>
      <p>First Name: {myCard.firstName}</p>
      <p>Last Name: {myCard.lastName}</p>
      <p>Company: {myCard.company}</p>
      <p>Role: {myCard.role}</p>
      <p>Email: {myCard.email}</p>
    </div>
  );
};

export default myUserDetails;
