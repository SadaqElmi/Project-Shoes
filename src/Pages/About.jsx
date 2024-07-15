/* eslint-disable react/no-unescaped-entities */


const About = () => {
  return (
    <>
    <div className="bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our History</h2>
          <p className="text-lg text-gray-700">
            Established in 2005, our company has been dedicated to crafting high-quality, comfortable, and stylish shoes. We started with a small workshop and have grown into a well-known brand that our customers trust and love.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            Our mission is to provide our customers with the best footwear experience. We focus on innovation, sustainability, and customer satisfaction. Every pair of shoes is made with precision and care to ensure the highest level of quality.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Our Shoes?</h2>
          <ul className="text-lg text-gray-700 list-disc list-inside">
            <li className="mb-2">Comfort: Our shoes are designed to provide maximum comfort, whether you're walking, running, or standing all day.</li>
            <li className="mb-2">Durability: Made from high-quality materials, our shoes are built to last.</li>
            <li className="mb-2">Style: We offer a wide range of designs to suit every taste and occasion.</li>
            <li className="mb-2">Sustainability: We are committed to using eco-friendly materials and sustainable manufacturing practices.</li>
            <li className="mb-2">Customer Satisfaction: Our customer service team is always ready to assist you and ensure you have the best experience possible.</li>
          </ul>
        </section>
        
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Testimonials</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-lg text-gray-700 mb-4">"These are the most comfortable shoes I've ever worn. Highly recommend!"</p>
              <p className="text-sm text-gray-500">- John Doe</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-lg text-gray-700 mb-4">"Stylish and durable, perfect for any occasion."</p>
              <p className="text-sm text-gray-500">- Jane Smith</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-lg text-gray-700 mb-4">"I love the eco-friendly approach. Great shoes and a great company."</p>
              <p className="text-sm text-gray-500">- Emily Johnson</p>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  )
};

export default About;