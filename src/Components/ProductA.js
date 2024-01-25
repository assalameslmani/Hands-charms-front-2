import React from "react";

const ProductA = () => {
  return (
    <div className="ProductA">
      <div className="admin-product-card">
        {/* First Container: Product Categories List */}
        <div className="product-categories-container">
          <h2>Product Categories</h2>
          <ul>
            <li>Rings</li>
            <li>Necklace</li>
            <li>Bracelet</li>
            <li>Earrings</li>
            <li>Keyring</li>
            <li>Phone Hanger</li>
          </ul>
        </div>

        {/* Second Container: Buttons */}
        <div className="button-container">
          <button className="login-btn">Edit Category</button>
          <button className="login-btn">Delete Category</button>
          <button className="login-btn">Add Category</button>
        </div>
      </div>
    </div>
  );
};

export default ProductA;
