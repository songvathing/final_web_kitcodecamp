import React from "react";

function Info_2() {
  return (
    <div className="container mx-auto flex items-center py-16">
      <div className="w-1/2 px-16">
        <h2 className="text-2xl font-semibold ">Welcome to Our Website</h2>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          laboriosam veritatis laudantium, harum quo tenetur voluptas sit vitae
          blanditiis deleniti!
        </p>
      </div>
      <div className="w-1/2">
        <img
          src="https://i.pinimg.com/736x/ae/26/fc/ae26fc1e8578b86ed5d37d657f3ac4fd.jpg"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
}

export default Info_2;
