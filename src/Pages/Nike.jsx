// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { nikeProducts } from "../../Backend/data";

const Adidas = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Load products or any initial setup
    setProducts(nikeProducts);
  }, []);

  return (
    <div className="mb-24">
      <div className="flex justify-center">
        <h1 className="text-[40px] font-bold">Nike</h1>
      </div>
      <h1 className="font-bold text-2xl mt-5 mb-3 pl-2">Top Nike Shoes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5">

        {products.map((product) => (
          <motion.div 
            key={product.id}
            className="flex-1 bg-gray-200 flex flex-col rounded-xl p-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h5 className="text-sm">{product.name}</h5>
            <div className="flex items-center justify-center">
              <img
                className="w-[200px] h-40 mb-4 object-cover"
                src={product.image}
                alt=""
              />
            </div>
            <div className="flex justify-between px-2 rounded-lg mt-[5px] items-center">
              <h5 className="text-sm">${product.price}</h5>
              <button className="py-1 px-4 bg-black text-white rounded-lg">
                Add to bag
              </button>
            </div>
          </motion.div>
        ))}
        
      </div>
    </div>
  );
}

export default Adidas;
