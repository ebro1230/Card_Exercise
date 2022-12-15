import React from "react";
import UserImage from "./UserImage";
import UserDetails from "./UserDetails";

const Card = ({ myCard, background }) => {
  //const {firstName, lastName, company, role, email, imageUrl} = myCard;
  const bg = "#" + background;
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        background: bg,
      }}
    >
      <UserImage myCardImage={myCard.imageUrl} />
      <UserDetails myCard={myCard} />
    </div>
  );
};

export default Card;
