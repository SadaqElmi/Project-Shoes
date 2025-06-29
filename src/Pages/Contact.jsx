const Contact = () => {
  return (
    <div>
      <div className="bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            <form className="bg-white p-6 rounded-lg shadow-lg space-y-4">
              <div>
                <label className="block text-lg font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  rows="4"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <img
              src="/images/AIR JORDAN 1 LOW.png"
              alt="Contact Us"
              className=" rounded-lg object-contain shadow-lg mb-8"
            />
            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
              <h2 className="text-2xl font-semibold">Our Address</h2>
              <p className="text-lg text-gray-700">
                Hodan Albarako <br />
                Banaadir
                <br />
                Phone: (252)619316187
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-indigo-600 hover:text-indigo-800">
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a href="#" className="text-indigo-600 hover:text-indigo-800">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="#" className="text-indigo-600 hover:text-indigo-800">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
                <a href="#" className="text-indigo-600 hover:text-indigo-800">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
