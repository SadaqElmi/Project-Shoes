/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state
const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
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
        // Update the quantity of the existing item
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity: updatedCart[existingProductIndex].quantity + 1,
        };
      } else {
        // Add new item to the cart
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
    case 'INCREASE_QUANTITY': {
      const { productId, color, size } = action.payload;
      const updatedCart = state.cart.map((item) => {
        if (item.product.id === productId && item.color.name === color && item.size.name === size) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      return {
        ...state,
        cart: updatedCart,
      };
    }
    case 'DECREASE_QUANTITY': {
      const { productId, color, size } = action.payload;
      const updatedCart = state.cart.map((item) => {
        if (item.product.id === productId && item.color.name === color && item.size.name === size) {
          return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 };
        }
        return item;
      });

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

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

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

  const increaseQuantity = (productId, color, size) => {
    dispatch({
      type: 'INCREASE_QUANTITY',
      payload: { productId, color, size },
    });
  };

  const decreaseQuantity = (productId, color, size) => {
    dispatch({
      type: 'DECREASE_QUANTITY',
      payload: { productId, color, size },
    });
  };

  return (
    <CartContext.Provider value={{ cart: state.cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
