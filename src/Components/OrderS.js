import React from "react";

const OrderS = () => {
  const orderDetails = {
    name: 'John Doe',
    location: '123 Main St, City',
    phoneNum: '123-456-7890',
    subTotal: 100,
    discountTotal: 10,
    deliveryCharges: 5,
    total: 95,
  };

  const handlePrint = () => {
    const isConfirmed = window.confirm('Are you sure you want to print the order summary?');
    if (isConfirmed) {
      window.print();
    }
  };

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <div className="summary-item">
        <strong>Name:</strong> {orderDetails.name}
      </div>
      <div className="summary-item">
        <strong>Location:</strong> {orderDetails.location}
      </div>
      <div className="summary-item">
        <strong>Phone Number:</strong> {orderDetails.phoneNum}
      </div>
      <div className="summary-item">
        <strong>Subtotal:</strong> ${orderDetails.subTotal.toFixed(2)}
      </div>
      <div className="summary-item">
        <strong>Discount Total:</strong> ${orderDetails.discountTotal.toFixed(2)}
      </div>
      <div className="summary-item">
        <strong>Delivery Charges:</strong> ${orderDetails.deliveryCharges.toFixed(2)}
      </div>
      <div className="summary-item">
        <strong>Total:</strong> ${orderDetails.total.toFixed(2)}
      </div>
      <button className="login-btn" onClick={handlePrint}>
        Print Summary
      </button>
    </div>
  );
};

export default OrderS;
