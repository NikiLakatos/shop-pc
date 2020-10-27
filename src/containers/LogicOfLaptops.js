import React, { useEffect, useState } from "react";
import { LaptopForm } from "../components/LaptopForm";
import { ListOfLaptops } from "../components/ListOfLaptops";
import { TagAlert } from "../components/TagAlert";
import { v4 as udidv4 } from "uuid";

const initialLaptops = localStorage.getItem("laptops")
  ? JSON.parse(localStorage.getItem("laptops"))
  : [];

function LogicOfLaptopComponents() {
  const [laptops, setLaptops] = useState(initialLaptops);
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);

  const [id, setId] = useState(0);
  useEffect(() => {
    console.log("ceva");
    localStorage.setItem("laptops", JSON.stringify(laptops));
  }, [laptops]);

  const handleManufacturer = (e) => {
    setManufacturer(e.target.value);
  };

  const handleModel = (e) => {
    setModel(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
   
  };

  const handleTagAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 7000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (manufacturer !== "" && model !== "" && price > 0) {
      if (edit) {
        let currentLaptop = laptops.map((item) => {
          return item.id === id
            ? { ...item, manufacturer, model, price }
            : item;
        });
        setLaptops(currentLaptop);
        setEdit(false);
      } else {
        const singleLaptop = { id: udidv4(), manufacturer, model, price };
        setLaptops([...laptops, singleLaptop]);
        handleTagAlert({ type: "success", text: "item added" });
      }

     setManufacturer("");
      setModel("");
      setPrice("");
    } else {
      handleTagAlert({
        type: "danger",
        text: `charge can't be empty value and amount value has to be bigger than zero`,
      });
    }
  };

  const handleDelete = (id) => {
    let currentId = laptops.filter((item) => item.id !== id);
    setLaptops(currentId);
    handleTagAlert({ type: "danger", text: "item deleted" });
  };

  const handleEdit = (id) => {
    let laptop = laptops.find((item) => item.id === id);
    let { manufacturer, model, price } = laptop;
    setManufacturer(manufacturer);
    setModel(model);
    setPrice(price);
    setEdit(true);
    setId(id);
  };

  return (
    <>
      {alert.show && <TagAlert type={alert.type} text={alert.text} />}
      <h1>list of laptops</h1>
      <main className="App">
        <LaptopForm
          manufacturer={manufacturer}
          model={model}
          price={price}
          handleSubmit={handleSubmit}
          handleManufacturer={handleManufacturer}
          handleModel={handleModel}
          handlePrice={handlePrice}
          edit={edit}
        />
        <ListOfLaptops
          laptops={laptops}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </main>
      <h1>
        total cost :
        <span>
          $
          {laptops.reduce((acc, curr) => {
            return (acc += parseInt(curr.price));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export const LogicOfLaptop = LogicOfLaptopComponents;
