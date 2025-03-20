import React from "react";

function Services() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Service</h2>
        <div className="flex flex-wrap justify-center mt-8">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-gray-800 font-semibold mb-2">Web Design</h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus, sequi eius officia labore vel nulla?
              </p>
              <button
                type="button"
                class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                More
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-800 font-semibold mb-2">
                Software Development
              </p>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus, sequi eius officia labore vel nulla?
              </p>
              <button
                type="button"
                class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
               More
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-800 font-semibold mb-2">Cyber Security</p>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus, sequi eius officia labore vel nulla?
              </p>
              <button
                type="button"
                class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
