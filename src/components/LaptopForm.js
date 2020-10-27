import React from "react";

function LaptopFormComponent(props) {

  console.log(props.manufacturer);
  console.log(props.model);
  console.log(props.price);
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <div>
          <label htmlFor="manufacturer">Manufacturer</label>
          <input
            type="text"
            name="manufacturer"
            placeholder="input manufacturer"
            value={props.manufacturer}
            onChange={props.handleManufacturer}
           
          />
        </div>
        <div>
          <label htmlFor="model">Model</label>
          <input
            type="text"
            name="model"
            placeholder="input model"
            value={props.model}
            onChange={ props.handleModel}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            placeholder="input price"
            value={props.price}
            onChange={props.handlePrice}
          />
        </div>
      </div>
      <button type="submit">{props.edit ? "Edit" : "Submit"}</button>
    </form>
  );
}

export const LaptopForm = LaptopFormComponent;
