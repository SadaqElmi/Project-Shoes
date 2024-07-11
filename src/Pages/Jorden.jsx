import { motion } from "framer-motion";

const Jorden = () => {
  return (
    <div className=" mb-24">
      <div className="flex justify-center">
        <h1 className="text-[40px] font-bold">Jordan</h1>
      </div>
      <h1 className="font-bold text-2xl mt-5 mb-3 pl-2">Top Jordan Shoes</h1>
      <div className="flex flex-col">
        <motion.section
          className="container p-2 max-w-screen-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-2 justify-around px-5 mb-4">
            <div className="flex-1 bg-gray-200 flex flex-col rounded-xl p-2  ">
              <h5 className="text-sm">Jordan</h5>
              <div className="flex items-center justify-center">
                <img
                  className="w-[200px] h-40 mb-4 object-cover"
                  src="/public/Jordan/A1.png"
                  alt=""
                />
              </div>
              <div className=" flex  justify-between px-2 rounded-lg  mt-[5px] items-center">
                <h5 className="text-sm">$120</h5>
                <button className="py-1 px-4 bg-black text-white rounded-lg">
                  Add to bag
                </button>
              </div>
            </div>

            <div className="flex-1 bg-gray-200 flex flex-col rounded-xl p-2  ">
              <h5 className="text-sm">Joran</h5>
              <div className="flex items-center justify-center">
                <img
                  className="w-[200px] h-40 mb-4 object-cover"
                  src="/public/Jordan/A5.png"
                  alt=""
                />
              </div>
              <div className=" flex  justify-between px-2 rounded-lg  mt-[5px] items-center">
                <h5 className="text-sm">$90</h5>
                <button className="py-1 px-4 bg-black text-white rounded-lg">
                  Add to bag
                </button>
              </div>
            </div>

            <div className="flex-1 bg-gray-200 flex flex-col rounded-xl p-2  ">
              <h5 className="text-sm">Jordan</h5>
              <div className="flex items-center justify-center">
                <img
                  className="w-[200px] h-40 mb-4 object-contain"
                  src="/public/Jordan/A8.png"
                  alt=""
                />
              </div>
              <div className=" flex  justify-between px-2 rounded-lg  mt-[5px] items-center">
                <h5 className="text-sm">$180</h5>
                <button className="py-1 px-4 bg-black text-white rounded-lg">
                  Add to bag
                </button>
              </div>
            </div>

            <div className="flex-1 bg-gray-200 flex flex-col rounded-xl p-2  ">
              <h5 className="text-sm">Jordan</h5>
              <div className="flex items-center justify-center">
                <img
                  className="w-[200px] h-40 mb-4 object-contain"
                  src="/public/Jordan/A10.png"
                  alt=""
                />
              </div>
              <div className=" flex  justify-between px-2 rounded-lg  mt-[5px] items-center">
                <h5 className="text-sm">$120</h5>
                <button className="py-1 px-4 bg-black text-white rounded-lg">
                  Add to bag
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="container p-2 max-w-screen-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-2 justify-around px-5 mb-4">
            <div className="flex-1 bg-gray-200 flex flex-col rounded-xl p-2  ">
              <h5 className="text-sm">Jordan</h5>
              <div className="flex items-center justify-center">
                <img
                  className="w-[200px] h-40 mb-4 object-contain"
                  src="/public/Jordan/A4.png"
                  alt=""
                />
              </div>
              <div className=" flex  justify-between px-2 rounded-lg  mt-[5px] items-center">
                <h5 className="text-sm">$120</h5>
                <button className="py-1 px-4 bg-black text-white rounded-lg">
                  Add to bag
                </button>
              </div>
            </div>

            <div className="flex-1 bg-gray-200 flex flex-col rounded-xl p-2  ">
              <h5 className="text-sm">Jordan</h5>
              <div className="flex items-center justify-center">
                <img
                  className="w-[200px] h-40 mb-4 object-contain "
                  src="/public/Jordan/A3.png"
                  alt=""
                />
              </div>
              <div className=" flex  justify-between px-2 rounded-lg  mt-[5px] items-center">
                <h5 className="text-sm">$120</h5>
                <button className="py-1 px-4 bg-black text-white rounded-lg">
                  Add to bag
                </button>
              </div>
            </div>

            <div className="flex-1 bg-gray-200 flex flex-col rounded-xl p-2  ">
              <h5 className="text-sm">Jordan</h5>
              <div className="flex items-center justify-center">
                <img
                  className="w-[200px] h-40 mb-4 object-contain"
                  src="/public/Jordan/A7.png"
                  alt=""
                />
              </div>
              <div className=" flex  justify-between px-2 rounded-lg  mt-[5px] items-center">
                <h5 className="text-sm">$100</h5>
                <button className="py-1 px-4 bg-black text-white rounded-lg">
                  Add to bag
                </button>
              </div>
            </div>

            <div className="flex-1 bg-gray-200 flex flex-col rounded-xl p-2  ">
              <h5 className="text-sm">Jordan</h5>
              <div className="flex items-center justify-center">
                <img
                  className="w-[200px] h-40 mb-4 object-contain"
                  src="/public/Jordan/A16.png"
                  alt=""
                />
              </div>
              <div className=" flex  justify-between px-2 rounded-lg  mt-[5px] items-center">
                <h5 className="text-sm">$130</h5>
                <button className="py-1 px-4 bg-black text-white rounded-lg">
                  Add to bag
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="container p-2 max-w-screen-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-2 justify-around px-5 mb-4">
            <div className="flex-1 bg-gray-200 flex flex-col rounded-xl p-2  ">
              <h5 className="text-sm">Jordan</h5>
              <div className="flex items-center justify-center">
                <img
                  className="w-[200px] h-40 mb-4 object-cover"
                  src="/public/Jordan/A14.png"
                  alt=""
                />
              </div>
              <div className=" flex  justify-between px-2 rounded-lg  mt-[5px] items-center">
                <h5 className="text-sm">$80</h5>
                <button className="py-1 px-4 bg-black text-white rounded-lg">
                  Add to bag
                </button>
              </div>
            </div>

            <div className="flex-1 bg-gray-200 flex flex-col rounded-xl p-2  ">
              <h5 className="text-sm">Jordan</h5>
              <div className="flex items-center justify-center">
                <img
                  className="w-[200px] h-40 mb-4 object-cover"
                  src="/public/Jordan/A13.png"
                  alt=""
                />
              </div>
              <div className=" flex  justify-between px-2 rounded-lg  mt-[5px] items-center">
                <h5 className="text-sm">$90</h5>
                <button className="py-1 px-4 bg-black text-white rounded-lg">
                  Add to bag
                </button>
              </div>
            </div>

            <div className="flex-1 bg-gray-200 flex flex-col rounded-xl p-2  ">
              <h5 className="text-sm">Jordan</h5>
              <div className="flex items-center justify-center">
                <img
                  className="w-[200px] h-40 mb-4 object-cover"
                  src="/public/Jordan/A12.png"
                  alt=""
                />
              </div>
              <div className=" flex  justify-between px-2 rounded-lg  mt-[5px] items-center">
                <h5 className="text-sm">$60</h5>
                <button className="py-1 px-4 bg-black text-white rounded-lg">
                  Add to bag
                </button>
              </div>
            </div>

            <div className="flex-1 bg-gray-200 flex flex-col rounded-xl p-2  ">
              <h5 className="text-sm">Jordan</h5>
              <div className="flex items-center justify-center">
                <img
                  className="w-[200px] h-40 mb-4 object-cover"
                  src="/public/Jordan/A11.png"
                  alt=""
                />
              </div>
              <div className=" flex  justify-between px-2 rounded-lg  mt-[5px] items-center">
                <h5 className="text-sm">$120</h5>
                <button className="py-1 px-4 bg-black text-white rounded-lg">
                  Add to bag
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="container p-2 max-w-screen-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-2 justify-around px-5 mb-4">
            <div className="flex-1 bg-gray-200 flex flex-col rounded-xl p-2  ">
              <h5 className="text-sm">Jordan</h5>
              <div className="flex items-center justify-center">
                <img
                  className="w-[200px] h-40 mb-4 object-contain"
                  src="/public/Jordan/A9.png"
                  alt=""
                />
              </div>
              <div className=" flex  justify-between px-2 rounded-lg  mt-[5px] items-center">
                <h5 className="text-sm">$130</h5>
                <button className="py-1 px-4 bg-black text-white rounded-lg">
                  Add to bag
                </button>
              </div>
            </div>

            <div className="flex-1 bg-gray-200 flex flex-col rounded-xl p-2  ">
              <h5 className="text-sm">Jordan</h5>
              <div className="flex items-center justify-center">
                <img
                  className="w-[200px] h-40 mb-4 object-cover"
                  src="/public/Jordan/A6.png"
                  alt=""
                />
              </div>
              <div className=" flex  justify-between px-2 rounded-lg  mt-[5px] items-center">
                <h5 className="text-sm">$440</h5>
                <button className="py-1 px-4 bg-black text-white rounded-lg">
                  Add to bag
                </button>
              </div>
            </div>

            <div className="flex-1 bg-gray-200 flex flex-col rounded-xl p-2  ">
              <h5 className="text-sm">Jordan</h5>
              <div className="flex items-center justify-center">
                <img
                  className="w-[200px] h-40 mb-4 object-cover"
                  src="/public/Jordan/A2.png"
                  alt=""
                />
              </div>
              <div className=" flex  justify-between px-2 rounded-lg  mt-[5px] items-center">
                <h5 className="text-sm">$120</h5>
                <button className="py-1 px-4 bg-black text-white rounded-lg">
                  Add to bag
                </button>
              </div>
            </div>

            <div className="flex-1 bg-gray-200 flex flex-col rounded-xl p-2  ">
              <h5 className="text-sm">Jordan</h5>
              <div className="flex items-center justify-center">
                <img
                  className="w-[200px] h-40 mb-4 object-contain"
                  src="/public/Jordan/A15.png"
                  alt=""
                />
              </div>
              <div className=" flex  justify-between px-2 rounded-lg  mt-[5px] items-center">
                <h5 className="text-sm">$110</h5>
                <button className="py-1 px-4 bg-black text-white rounded-lg">
                  Add to bag
                </button>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Jorden;
