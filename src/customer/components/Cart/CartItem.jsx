import React from 'react'
import { IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from "@headlessui/react";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://images.unsplash.com/photo-1723239406233-88c68024a4d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Mens gen-Z tees</p>
          <p className="opacity-70">Size : Lg-White</p>
          <p className="opacity-70 mt-2">Seller : Realstick</p>
          <div className="flex items-center gap-3 pt-5 ">
            <p className=" tracking-tight font-bold text-gray-900">₹199/-</p>
            <p className="line-through opacity-70">₹999</p>
            <p class="sm:px-3 sm:py-2 px-2 py-1 text-sm sm:text-xs font-bold tracking-wide text-gray-900 opacity-70 uppercase  rounded-full">
              76% off
            </p>
          </div>
        </div>
      </div>
        <div className="lg:flex items-center lg:space-x-10 pt-4 ">
            <div className="flex items-center space-x-2">
                <IconButton >
                <RemoveCircleOutlineIcon/>
                </IconButton>
                <span className="px-7 py-1 border rounded-sm">7</span>
                <IconButton sx={{color:"black"}}>
                <AddCircleOutlineIcon/>
                </IconButton>
            </div>
            <div>
                <Button sx={{color:"black"}}>Remove</Button>
            </div>

        </div>
    </div>
  )
}

export default CartItem