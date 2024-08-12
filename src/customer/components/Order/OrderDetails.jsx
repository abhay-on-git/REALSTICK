import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className="lg:px-20 px-2">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={2} />
      </div>
      <Grid container className="space-y-5 w-full">
        {[1,1,1,1,1,1,1,1].map((item)=>(
            <Grid
            item
            conatiner
            direction={{sm:"row" , xs:'column'}}
            className="shadow-xl w-full rounded-md p-5 flex items-center justify-between border"
            sx={{ alineItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex w-full items-center space-x-8 mb-2 md:space-x-2">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top mr-5"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="space-y-1">
                <p className=" font-semibold">Men's Gen-Z tees</p>
                <p className="space-x-5">
                <span className="text-xs opacity-50 font-semibold">Color : Black</span>
                <span className="text-xs opacity-50 font-semibold">Size : M</span>
                </p>
                <p className=" ">Seller :Realstick</p>
                <p>₹1999</p>
              </div>
              </div>
            </Grid>
            <Grid  item>
              <Box className="text-zinc-900">
                  <StarBorderIcon sx={{fontSize:'2rem'}} className="px-2 text-5xl"/>
                  <span className="whitespace-nowrap">Rate & Review Product</span>
  
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
