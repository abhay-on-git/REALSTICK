import React from "react";

import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div>
        <div className="lg:grid grid-cols-3 lg:px-16 py-8 relative">
        <div className=" grid px-5 col-span-2 gap-5 ">
        {[1,1,1,1,1,1].map((item)=><CartItem/>)}
        </div>
        <div className="px-5 sticky top-0 h-screen mt-5 lg:mt-0">
            <div className="border p-5 ">
             <p className="uppercase opacity-60 pb-4">Price detail</p>
             <hr />
             <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹4217</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Disccount</span>
                <span className="text-green-600">-3419</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 font-bold ">
                <span>Total Amount</span>
                <span className="text-green-600">₹4217</span>
              </div>
             </div>
             <button
                        type="submit"
                        className="mt-5 flex w-full uppercase items-center justify-center rounded-md border border-transparent bg-zinc-800 px-8 py-3 text-base font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-zinc-800 focus:ring-offset-2"
                      >
                        Checkout
                      </button>
            </div>

        </div>
        </div>
    </div>
  );
};

export default Cart;
