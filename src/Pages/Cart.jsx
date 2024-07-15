import { useCart } from './CartContext';

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  // Calculate the total price
  const totalPrice = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="mb-4 p-4 border rounded-lg shadow-md">
              <div className="flex justify-between">
                <h2 className="text-lg font-semibold">{item.product.name}</h2>
                <button
                  onClick={() => removeFromCart(item.product.id, item.color.name, item.size.name)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  Remove
                </button>
              </div>
              <div className="flex items-center mt-2 gap-4">
                <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-cover rounded-lg mr-4" />
                <div>
                  <p className="text-gray-700">Price: ${item.product.price}</p>
                  <p className="text-gray-700">Color: {item.color.name}</p>
                  <p className="text-gray-700">Size: {item.size.name}</p>
                  <div className="flex items-center">
                    <button
                      onClick={() => decreaseQuantity(item.product.id, item.color.name, item.size.name)}
                      className="px-2 py-1 border rounded-l-lg bg-gray-200 hover:bg-gray-300"
                    >
                      -
                    </button>
                    <p className="px-4 py-1 border-t border-b">{item.quantity}</p>
                    <button
                      onClick={() => increaseQuantity(item.product.id, item.color.name, item.size.name)}
                      className="px-2 py-1 border rounded-r-lg bg-gray-200 hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <h2 className="text-xl font-bold">Total Price: ${totalPrice.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
