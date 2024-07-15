import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaStar } from 'react-icons/fa';
import { Dialog, DialogBackdrop, DialogPanel, Radio, RadioGroup } from '@headlessui/react';
import { adidasProducts } from '../../Backend/data'; // Assuming this is correctly imported

const Adidas = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    // Simulating product data fetch or setup
    setProducts(adidasProducts);
  }, []);

  const handleAddToCart = (product) => {
    console.log('Product added to cart:', product);
    // Implement your cart logic here
  };

  const handleProductClick = (productId) => {
    const product = adidasProducts.find((p) => p.id === productId);
    if (product) {
      setSelectedProduct(product); // Set selected product
      setSelectedColor(product.colors[0]); // Set initial color selection
      setSelectedSize(product.sizes[0]); // Set initial size selection
      setOpen(true); // Open dialog
    }
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="mb-24">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold">Adidas</h1>
      </div>
      <h1 className="font-bold text-2xl mt-5 mb-3 pl-2">Top Adidas Shoes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="flex-1 bg-gray-200 flex flex-col rounded-xl p-2 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleProductClick(product.id)}
          >
            <h5 className="text-sm">{product.name}</h5>
            <div className="flex items-center justify-center">
              <img className="w-[200px] h-40 mb-4 object-cover" src={product.image} alt={product.alt} />
            </div>
            <div className="flex justify-between px-2 rounded-lg mt-[5px] items-center">
              <h5 className="text-sm">${product.price}</h5>
              <button
                className="py-1 px-4 bg-black text-white rounded-lg"
                onClick={() => handleAddToCart(product)}
              >
                Add to bag
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog open={open} onClose={() => setOpen(false)} className="fixed inset-0 z-50 overflow-y-auto">
        <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        <DialogPanel className="flex items-center justify-center min-h-screen p-4">
          <div className="relative bg-white p-8 rounded-lg w-full max-w-xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FaTimes className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </button>

            <div className="flex">
              <div className="w-1/2 mr-8">
                <img src={selectedProduct?.image} alt={selectedProduct?.alt} className="rounded-lg" />
              </div>
              <div className="w-1/2">
                <h2 className="text-xl font-semibold mb-2">{selectedProduct?.name}</h2>
                <p className="text-gray-700 mb-2">${selectedProduct?.price}</p>

                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`h-6 w-6 ${
                        index < selectedProduct?.rating ? 'text-yellow-500' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-500">{selectedProduct?.reviewCount} reviews</span>
                </div>

                <form>
                  <fieldset className="mb-4">
                    <legend className="text-sm font-medium mb-2">Color</legend>
                    <RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex items-center ml-4 space-x-3">
                      {selectedProduct?.colors.map((color) => (
                        <Radio
                          key={color.name}
                          value={color}
                          className={classNames(
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none',
                            color === selectedColor ? 'ring-2 ring-gray-400' : ''
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.class,
                              'h-8 w-8 rounded-full border border-black border-opacity-10'
                            )}
                          />
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>

                  <fieldset className="mt-4">
                    <legend className="text-sm font-medium mb-2">Size</legend>
                    <RadioGroup value={selectedSize} onChange={setSelectedSize} className="grid grid-cols-4 gap-4">
                      {selectedProduct?.sizes.map((size) => (
                        <Radio
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={classNames(
                            'cursor-pointer bg-white text-gray-900 shadow-sm rounded-md px-4 py-2 text-sm',
                            {
                              'cursor-not-allowed bg-gray-50 text-gray-200': !size.inStock,
                            }
                          )}
                        >
                          <span className="block text-center">{size.name}</span>
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>

                  <button
                    type="button"
                    className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
                    onClick={() => handleAddToCart(selectedProduct)}
                  >
                    Add to bag
                  </button>
                </form>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
};

export default Adidas;
