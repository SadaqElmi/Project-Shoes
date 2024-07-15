/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  cart: [],
};

// Create context
const CartContext = createContext(initialState);

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, color, size } = action.payload;
      const existingProductIndex = state.cart.findIndex(
        (item) =>
          item.product.id === product.id && item.color.name === color.name && item.size.name === size.name
      );

      let updatedCart = [...state.cart];
      if (existingProductIndex >= 0) {
        // Update the quantity of the existing item by 1
        updatedCart[existingProductIndex].quantity += 1;
      } else {
        // Add new item to the cart with quantity 1
        updatedCart.push({ product, color, size, quantity: 1 });
      }

      return {
        ...state,
        cart: updatedCart,
      };
    }
    case 'REMOVE_FROM_CART': {
      const { productId, color, size } = action.payload;
      const updatedCart = state.cart.filter(
        (item) => !(item.product.id === productId && item.color.name === color && item.size.name === size)
      );

      return {
        ...state,
        cart: updatedCart,
      };
    }
    default:
      return state;
  }
};

// Provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product, color, size) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { product, color, size },
    });
  };

  const removeFromCart = (productId, color, size) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { productId, color, size },
    });
  };

  return (
    <CartContext.Provider value={{ cart: state.cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
