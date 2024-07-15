// CartContext.js
// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "LOAD":
      return action.payload;
    case "ADD":
      return state.map((item) =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );
    case "REMOVE":
      return state.filter((item) => item.id !== action.payload);
    case "UPDATE":
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("shoes")) || [
      { id: "shoes1", quantity: 2 },
      { id: "shoes2", quantity: 1 },
    ];
    dispatch({ type: "LOAD", payload: storedCart });
  }, []);

  useEffect(() => {
    localStorage.setItem("Ecommerce", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (id) => dispatch({ type: "ADD", payload: id });
  const removeFromCart = (id) => dispatch({ type: "REMOVE", payload: id });
  const updateQuantity = (id, quantity) => dispatch({ type: "UPDATE", payload: { id, quantity } });

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
