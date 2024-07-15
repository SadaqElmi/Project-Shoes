import { useCart } from './CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product, index) => (
            <div key={index} className="mb-4 p-4 border rounded-lg shadow-md">
              <div className="flex justify-between">
                <h2 className="text-lg font-semibold">{product.product.name}</h2>
                <button
                  onClick={() => removeFromCart(product.product.id, product.color.name, product.size.name)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  Remove
                </button>
              </div>
              <div className="flex items-center mt-2">
                <img src={product.product.image} alt={product.product.name} className="w-20 h-20 object-cover rounded-lg mr-4" />
                <div>
                  <p className="text-gray-700">Price: ${product.product.price}</p>
                  <p className="text-gray-700">Color: {product.color.name}</p>
                  <p className="text-gray-700">Size: {product.size.name}</p>
                  <p className="text-gray-700">Quantity: {product.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
