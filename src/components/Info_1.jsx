import React from "react";

function Info_1() {
  return (
    <div className="container mx-auto flex items-center py-16">
      <div className="w-1/2">
        <img
          src="https://i.pinimg.com/736x/54/0c/16/540c16fe8d7c4529661b33cb6dedaea7.jpg"
          alt="development"
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="w-1/2 px-16">
        <h2 className="text-2xl font-semibold ">Welcome to Our Website</h2>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          laboriosam veritatis laudantium, harum quo tenetur voluptas sit vitae
          blanditiis deleniti!
        </p>
      </div>
    </div>
  );
}

export default Info_1;
