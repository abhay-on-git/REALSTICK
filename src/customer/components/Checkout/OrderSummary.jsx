import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../Redux/Order/Action'
import { useLocation } from 'react-router-dom'

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation()
  const {order} = useSelector(store => store)
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id")

  useEffect(()=>{
   dispatch(getOrderById(orderId))
  },[orderId])
  return (
    <div>
        <div className='shadow-lg rounded-s-md'>
            <AddressCard address={order.order?.shippingAddress}/>
        </div>
        <div>
        <div className="lg:grid grid-cols-3 py-8 relative">
        <div className=" grid col-span-2 gap-5 ">
        {order.order?.orderItems.map((item)=><CartItem key={item._id} item={item}/>)}
        </div>
        <div className="px-2 sticky top-0 h-screen mt-5 lg:mt-0">
            <div className="border p-5">
             <p className="uppercase opacity-60 pb-4">Price detail</p>
             <hr />
             <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹{order.order.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600">-{order.order.discount}</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 font-bold ">
                <span>Total Amount</span>
                <span className="text-green-600">₹{order.order?.totalDiscountedPrice}</span>
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
    </div>
  )
}

export default OrderSummary