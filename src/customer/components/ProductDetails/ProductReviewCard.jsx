import { Avatar, Box, Grid, Rating, Typography } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <Box
    className='hover:scale-105 transition-all cursor-pointer'
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "16px",
        backgroundColor: "#fff",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Avatar sx={{ width: 40, height: 40, bgcolor: "#000" }}>
            R
          </Avatar>
        </Grid>
        <Grid item >
          <Typography variant="h6" fontWeight="bold">
            RAM
          </Typography>
          <Typography variant="body2" color="textSecondary">
            April 5, 2024
          </Typography>
          <Rating value={4.5} name="half-rating" readOnly />
          <Typography variant="body1" mt={1}>
            Nice product, I loved it!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductReviewCard;
