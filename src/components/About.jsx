import React from "react";

function About() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Welcome to our world! We are passionate about creating meaningful
              connections and delivering value. Our team is dedicated to
              innovation, quality, and community. Let us take you on a journey
              where your goals inspire our actions.
            </p>
            <div className="mt-8">
              <a
                href="/about"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Learn more about us <span className="ml-2">&#8594;</span>
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
              alt="Team collaboration in a modern workspace"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
