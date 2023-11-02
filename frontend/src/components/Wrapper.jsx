import React from "react";
import Card from "./Card";

function Wrapper() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card />
    </div>
  );
}

export default Wrapper;
