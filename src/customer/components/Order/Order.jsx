import { Grid, lighten } from "@mui/material";
import React, { useEffect, useState } from "react";
import OrderCard from "./OrderCard";
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const orderStatus = [
  { label: "On The Way", value: "on_the_way" },
  { label: "Dilevered", value: "dilevered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" },
];

const Order = () => {
  const [isFilterOpen , setIsFilterOpen] = useState(true);
  useEffect(() => {
    if (window.innerWidth < 1440) {
      setIsFilterOpen(false);
    }
  }, []);
  return (
    <div className="lg:px-32 py-8 px-2">
      <Grid container sx={{justifyContent: "space-between"}} direction={{lg:"row",md:"row" , xs:"column"}}>
        <Grid item xs={2.5}>
            <h1 
            onClick={()=>setIsFilterOpen(!isFilterOpen)}
            className="font-bold text-xl">Filters <span className="text-gray-800 ml-2"><FilterAltIcon/></span></h1>
          <div className={`h-auto shadow-lg bg-white p-5 sticky top-5 ${!isFilterOpen ? 'hidden' : 'block' }`}>
            <div className="space-y-4 ">
              <h1 className="font-semibold">Order Status</h1>
              {orderStatus.map((option) => (
                <div className="flex items-center">
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 text-zinc-900 focus:ring-zinc-900"
                  />
                  <label
                    htmlFor={option.value}
                    className="ml-3 text-sm text-gray-600"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-5">
            {[1, 1, 1, 1, 1,1,1,1,1,1].map((item) => (
              <OrderCard />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
