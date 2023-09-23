import React, {useState } from "react";
import "./Dishes.css"; // Import your CSS file
import dish1 from "../assets/image/dish1.jpg";
import dish2 from "../assets/image/dish2.png";
import dish3 from "../assets/image/dish3.jpg";
import dish4 from "../assets/image/dish4.jpg";
import dish5 from "../assets/image/dish5.jpg";
import dish6 from "../assets/image/dish6.jpg";
import axios from "axios";

const Dishes = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Pizza",
      price: 850,
      amount: 0,
      src: dish1,
    },
    {
      id: 2,
      name: "Sandwich",
      price: 350,
      amount: 0,
      src: dish2,
    },
    {
      id: 3,
      name: "Burger",
      price: 400,
      amount: 0,
      src: dish3,
    },
    {
      id: 4,
      name: "Noodles",
      price: 300,
      amount: 0,
      src: dish4,
    },
    {
      id: 5,
      name: "Burrito",
      price: 320,
      amount: 0,
      src: dish5,
    },
    {
      id: 6,
      name: "Itlalian Pasta",
      price: 1200,
      amount: 0,
      src: dish6,
    },
  ]);


  
  const [cart, setCart] = useState([]);

  
  const apiUrl='http://localhost:8080/api/order/';
    const handleAddToCart = async (itemId) => {
      const sel = items.find((item)=>item.id===itemId);
        // itemId.preventDefault();
        const orderData = [
          {
            name: sel.name,
            amount: sel.amount,
            price: sel.price,
          },
        ];
        console.log("Data to be sent:", {
          name: sel.name,
          amount: sel.amount,
          price: sel.price,
        });
        try {
                await axios.post(`${apiUrl}save`,orderData,{
                timeout:5000,
            }).then((response)=>{
            alert("Order placed Successfully");
            // navigate("/home")
            console.log(response.data)
            }); // Handle the response data as needed
        } catch (error) {
            alert(error);
            console.error('Error ordering food:', error);
        }
    };

  const handleAdToCart = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, amount: item.amount + 1 } : item
      )
    );
  };

  const handleRemoveFromCart = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, amount: item.amount - 1 } : item
      )
    );
  };

  return (
    <div id="dishes">
      <h1 className="h">Our Dishes</h1>
    <div className="food-items">
      {items.map((item, index) => (
        <div className="food-item" key={item.id}>
          <div className="food-item-content">
            <img
              src={item.src}
              alt={item.name}
              className="food-item-image"
            />
            <h3 className="food-item-name">{item.name}</h3>
            <p className="food-item-price">Price: Rs  {item.price.toFixed(2)}</p>
          </div>
          <div className="food-item-amount">
            <button
              className="amount-button"
              onClick={() => handleRemoveFromCart(item.id)}
              disabled={item.amount === 0}
            >
              -
            </button>
            <span className="amount-value">{item.amount}</span>
            <button
              className="amount-button"
              onClick={() => handleAdToCart(item.id)}
            >
              +
            </button>
          </div>
          <button
            className="add-to-cart-button"
            onClick={()=>handleAddToCart(item.id)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Dishes;