import React from "react";

interface CardProps {
  titulo: string;
  children: React.ReactNode;
}

function Card({ titulo, children }: CardProps) {
  return (
    <div
      style={{
        border: "2px solid steelblue",
        padding: "20px",
        marginBottom: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>{titulo}</h2>
      <hr />
      {children}
    </div>
  );
}

export default Card;
