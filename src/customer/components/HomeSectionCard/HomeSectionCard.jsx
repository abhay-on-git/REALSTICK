import React from "react";

const HomeSectionCard = ({product}) => {
  return (
    <div className="cursor-pointer shadow-lg flex flex-col items-center bg-white border border-gray-200 rounded-lg overflow-hidden w-[18rem] mx-auto hover:shadow-xl">
      <div className="md:h-[24rem] h-[20rem] p-3 rounded-t-lg overflow-hidden w-full">
        <div className="overflow-hidden rounded-t-lg">
        <img
          className="object-cover hover:scale-100 scale-105 object-center transform transition-transform w-full h-full rounded-t-lg"
          src={product.image || 'https://images.unsplash.com/photo-1552168212-9ceb61083ba0?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          alt="Product"
        />
        </div>
      </div>

      <div className="p-4 w-full">
        <h1 className="text-xl font-bold text-gray-900">{product.brand || 'RealStick'}</h1>
        <p className="mt-1 text-sm text-gray-500">{product.description || 'UNISEX Pure Gen-Z vibe Ts'}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
