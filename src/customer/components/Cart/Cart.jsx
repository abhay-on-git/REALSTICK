import React, { useEffect } from "react";

import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../Redux/Cart/Action";

const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {cart} = useSelector((state) => state.cart)
  const handleCheckOut = ()=>{
    navigate('/checkout?step=1')
  }

  useEffect(()=>{
    dispatch(getCart())
  },[cart?.cartItems])
  return (
    <div>
        <div className="lg:grid grid-cols-3 lg:px-16 py-8 relative">
        <div className=" grid px-2 col-span-2 gap-5 ">
        {cart?.cartItems.map((item)=>(
          <CartItem key={item.id} item={item} />
        ))}
        </div>
        <div className="px-2 sticky top-0 h-screen mt-5 lg:mt-0">
            <div className="border p-5 ">
             <p className="uppercase opacity-60 pb-4">Price detail</p>
             <hr />
             <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹{cart?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600">-₹{cart?.discount}</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Delivery Charge</span>
                <span className="text-green-600">{cart?.deliveryCharge || "FREE"}</span>
              </div>
              <div className="flex justify-between pt-3 font-bold ">
                <span>Total Amount</span>
                <span className="text-green-600">₹{cart?.totalDiscountedPrice}</span>
              </div>
             </div>
             <button
                        onClick={handleCheckOut}
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
