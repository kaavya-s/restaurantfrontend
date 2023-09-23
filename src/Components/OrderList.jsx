// OrderTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './OrderList.css';

const OrderList = () => {
  const apiUrl = 'http://localhost:8080/api/order/getList'; // Replace with your API URL to fetch orders
  const [orderList, setOrderList] = useState([]);
  const [editingOrder, setEditingOrder] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setOrderList(response.data);
    } catch (error) {
      console.error('Error fetching order list:', error);
    }
  };
  const handleDeleteOrder = async (orderId) => {
    try {
      // Make a DELETE request to your backend API to delete the order
      await axios.delete(`http://localhost:8080/api/order/delete/${orderId}`);
      // Refresh the order list after deletion
      fetchData();
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  const handleEditClick = (orderId) => {
    setEditingOrder(orderId);
  };
  const handleUpdateOrder = async (updatedOrder) => {
    try {
      await axios.put(`http://localhost:8080/api/order/update/${updatedOrder.oid}`, updatedOrder);
      // Clear the editing state and fetch updated data
      setEditingOrder(null);
      fetchData();
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };
  
  return (
    <div className="order-list">
      <h2>Order List</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Item Name</th>
            <th>Amount</th>
            <th>Price</th>
            <th>Actiions</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((order) => (
            <tr key={order.oid}>
              <td>{order.oid}</td>
              <td>{order.name}</td>
              <td>{order.amount}</td>
              <td>{order.price}</td>
              <td>
                <button onClick={() => handleDeleteOrder(order.oid)}>Delete</button>
                <button onClick={() => handleEditClick(order)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingOrder && (
        <div className="edit-order-form">
          <h2>Edit Order</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Item Name"
              value={editingOrder.name}
              onChange={(e) =>
                setEditingOrder({ ...editingOrder, name: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Amount"
              value={editingOrder.amount}
              onChange={(e) =>
                setEditingOrder({ ...editingOrder, amount: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Price"
              value={editingOrder.price}
              onChange={(e) =>
                setEditingOrder({ ...editingOrder, price: e.target.value })
              }
            />
            <button onClick={() => handleUpdateOrder(editingOrder)}>
              Update
            </button>
            <button onClick={() => setEditingOrder(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default OrderList;
