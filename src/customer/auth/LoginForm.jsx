import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = {
            email :formData.get("email"),
            password :formData.get("password"),
    }
    console.log(userData,"uuuuuuuuuu")
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
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
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center pt-3 justify-center">
            <p>if you don't have an account </p>
            <button
            className="ml-3 text-black underline  text-sm"
            size='small'
            onClick={()=>navigate('/signup')}
            >Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
