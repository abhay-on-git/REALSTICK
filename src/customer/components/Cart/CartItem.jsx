import React from "react";
import { IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../Redux/Cart/Action";

const CartItem = ({ item }) => {
  const [product] = item?.product;
  const dispatch = useDispatch();
  const handleUpdateCartItem = (num) => {
    console.log("cartItemUpdated");
    const data = {
      data: { quantity: item.quantity + num },
      cartItemId: item?._id,
    };
    dispatch(updateCartItem(data))
  };
  const handleRemoveCartItem = () => {
    console.log("cartItemRemoved");
    dispatch(removeCartItem(item._id));
  };
  return (
    <div className="p-5 shadow-lg border rounded-md h-auto">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={
              product.imageURL ||
              "https://images.unsplash.com/photo-1723239406233-88c68024a4d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
            }
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{product.title}</p>
          <p className="opacity-70">Size : Lg-White</p>
          <p className="opacity-70 mt-2">Seller : {product.brand}</p>
          <div className="flex items-center gap-3 pt-5 ">
            <p className=" tracking-tight font-bold text-gray-900">
              ₹{product.discountedPrice}
            </p>
            <p className="line-through opacity-70">₹{product.price}</p>
            <p class="sm:px-3 sm:py-2 px-2 py-1 text-sm sm:text-xs font-bold tracking-wide text-gray-900 opacity-70 uppercase  rounded-full">
              {product.discountPersent + " %"} off
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4 ">
        <div className="flex items-center space-x-2">
          <IconButton
            onClick={() => handleUpdateCartItem(-1)}
            disabled={item.quantity <= 1}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="px-7 py-1 border rounded-sm">{item.quantity}</span>
          <IconButton
            sx={{ color: "black" }}
            onClick={() => handleUpdateCartItem(1)}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button
            sx={{ color: "black" }}
            onClick={() => handleRemoveCartItem()}
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
