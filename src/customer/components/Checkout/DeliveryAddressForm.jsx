import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { useDispatch } from "react-redux";
import { createOrder } from "../../../Redux/Order/Action";
import { Navigate, useNavigate } from "react-router-dom";

const DeliveryAddressForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const address = {
            firstName:data.get('firstName'),
            lastName:data.get('lastName'),
            city:data.get('city'),
            state:data.get('state'),
            streetAddress:data.get('streetAddress'),
            mobile:data.get('mobile'),
            zipCode:data.get('zip'),
        }
        const orderData = {address , navigate}
        console.log(orderData , 'address');
        dispatch(createOrder(orderData))


    }
  return (
    <div>
      <Grid container spacing={4}>
        <Grid xs={12} lg={5} className="rounded-md shadow-md border h-[30.5rem] overflow-y-scroll">
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button sx={{ mt: 2 , bgcolor:"black"}} size="large" variant="contained">Deliver Here</Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
            <Box className='border rounded-s-md shadow-md p-5'>
                <form onSubmit={handleSubmit} >
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            id='firstName'
                            name="firstName"
                            label='First Name'
                            fullWidth
                            autoComplete="given-name"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            id='lastName'
                            name="lastName"
                            label='Last Name'
                            fullWidth
                            autoComplete="given-name"
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                            required
                            id='streetAddress'
                            name="streetAddress"
                            label='Address'
                            fullWidth
                            multiline
                            rows={4}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            id='city'
                            name="city"
                            label='City'
                            fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            id='state'
                            name="state"
                            label='State/Province/Region'
                            fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            id='zip'
                            name="zip"
                            label='Zip/Postal Code'
                            fullWidth
                            autoComplete="shipping-postal-code"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            id='mobile'
                            name="mobile"
                            label='Phone Number'
                            fullWidth
                            autoComplete="given-name"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <Button type="submit" sx={{ py:1.5 , mt: 2 , bgcolor:"black"}} size="large" variant="contained">Deliver Here</Button>
                        </Grid>

                    </Grid>
                </form>

            </Box>

        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
