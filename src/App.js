import React from "react";
import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);
  const [newProductName, setNewProductName] = useState("");
  const [editingProductId, setEditingProductId] = useState(null);
  const [editedProductName, setEditedProductName] = useState("");

  // Handle increasing product count
  function handleIncreaseClick(productId) {
    const newProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1,
        };
      }
      return product;
    });
    setProducts(newProducts);
  }

  // Handle decreasing product count
  function handleDecreaseClick(productId) {
    const newProducts = products.map((product) => {
      if (product.id === productId && product.count > 0) {
        return {
          ...product,
          count: product.count - 1,
        };
      }
      return product;
    });
    setProducts(newProducts);
  }

  // Handle editing product name
  function handleEditClick(productId, currentName) {
    setEditingProductId(productId);
    setEditedProductName(currentName);
  }

  // Save the edited product name
  function handleSaveClick(productId) {
    const newProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          name: editedProductName,
        };
      }
      return product;
    });
    setProducts(newProducts);
    setEditingProductId(null); // Exit edit mode
  }

  // Handle adding a new product
  function handleAddProduct() {
    if (newProductName.trim()) {
      const newProduct = {
        id: products.length, // Simple ID generation (not ideal for production)
        name: newProductName,
        count: 1,
      };
      setProducts([...products, newProduct]);
      setNewProductName(""); // Clear the input field
    }
  }

  return (
    <div>
      {/* Input field for adding new products */}
      <div>
        <input
          type="text"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
          placeholder="Enter product name"
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      {/* List of products */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {/* Display product name or edit input field */}
            {editingProductId === product.id ? (
              <input
                type="text"
                value={editedProductName}
                onChange={(e) => setEditedProductName(e.target.value)}
              />
            ) : (
              <>
                {product.name} (<b>{product.count}</b>)
              </>
            )}

            {/* Increase and decrease buttons */}
            <button onClick={() => handleIncreaseClick(product.id)}>+</button>
            <button onClick={() => handleDecreaseClick(product.id)}>-</button>

            {/* Edit and Save buttons */}
            {editingProductId === product.id ? (
              <button onClick={() => handleSaveClick(product.id)}>Save</button>
            ) : (
              <button onClick={() => handleEditClick(product.id, product.name)}>
                Edit
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
