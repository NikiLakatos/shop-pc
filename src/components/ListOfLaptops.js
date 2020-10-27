import React from "react";
import { LaptopItem } from "./LaptopItem";

function ListOfLaptopsComponent(props) {
  return (
    <div>
      <ul>
        {props.laptops.map((laptop) => {
          return (
            <LaptopItem
              key={laptop.id}
              laptop={laptop}
              handleEdit={props.handleEdit}
              handleDelete={props.handleDelete}
            />
          );
        })}
      </ul>
    </div>
  );
}

export const ListOfLaptops = ListOfLaptopsComponent;
