import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, signup } from "../../Redux/Auth/Action";

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const jwt = localStorage.getItem('jwt')
  const auth = useSelector(store => store.auth)
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = {
            firstName :formData.get("firstName"),
            lastName :formData.get("lastName"),
            email :formData.get("email"),
            password :formData.get("password"),
    }
    dispatch(signup(userData))
  };

  useEffect(()=>{
    if(jwt){
      dispatch(getUser(jwt))
    }
  },[jwt,auth.jwt])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="password"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                width: "100%",
                padding: ".8rem 0",
                backgroundColor: "rgb(24 24 27)", // equivalent to bg-zinc-900
                "&:hover": {
                  backgroundColor: "rgb(0 0 0)", // equivalent to bg-black
                },
              }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center pt-3 justify-center">
            <p>if you have already an account </p>
            <button
            className="ml-3 text-black underline"
            size='small'
            onClick={()=>navigate('/login')}
            >Login</button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
