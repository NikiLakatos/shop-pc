import React from "react";

function LaptopItemComponent(props) {
  const styles = {
    marginLeft: "1rem",
  };

  return (
    <li style={{ display: "flex", alignItems: "center", textAlign: "center" }}>
      <div>
        <span>{props.laptop.manufacturer}</span>
        <span style={styles}>{props.laptop.model}</span>
        <span style={styles}>{props.laptop.price}</span>
      </div>
      <div>
        <button onClick={() => props.handleEdit(props.laptop.id)}>Edit</button>
        <button onClick={() => props.handleDelete(props.laptop.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export const LaptopItem = LaptopItemComponent;
