import React from "react";
import { Grid, Typography } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sm={12}
        spacing={1}
      >
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} md={2} alignItems={'center'}>
            <div className="flex lg:w-fit w-full items-center justify-between md:px-12 md:py-4 px-5 py-2">
              <h1 className="text-xl md:text-2xl font-bold mb-3">REALSTICK</h1>
              <div className="lg:hidden w-fit h-full flex justify-center gap-2 items-center">
              <h5 className="text-sm md:text-base px-2"><WhatsAppIcon/></h5>
              <h5 className="text-sm md:text-base px-2"><InstagramIcon/></h5>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={1}>
              {["Top", "Bags", "Caps", "Accessories", "Bottom", "Shades"].map(
                (item) => (
                  <Grid item xs={4} sm={4} md={2} lg={2} key={item}>
                    <h5 className="text-sm md:text-base px-2">{item}</h5>
                  </Grid>
                )
              )}
            </Grid>
          </Grid>
          <Grid item xs={12} md={2}>
            <div className=" w-full hidden lg:flex justify-center gap-5 items-center p-1">
              <h5 className="text-sm md:text-base px-2"><WhatsAppIcon/></h5>
              <h5 className="text-sm md:text-base px-2"><InstagramIcon/></h5>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid xs={12} sm={6} md={3} className="text-center mx-auto p-1">
            <p className="lg:text-sm text-[1.5vmax] mt-3">
              © 2024 REALSTICK. All Rights Reserved.
            </p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
