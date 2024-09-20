import { Button, Card, CardContent, styled, Typography } from "@mui/material";
import React from "react";

const TriangleImage = styled("img")({
  position: "absolute",
  bottom: 0,
  right: 0,
  height: 170,
});

const TrophyImage = styled("img")({
  position: "absolute",
  bottom: 10,
  right: 16,
  height: 98,
});

const Achivement = () => {
  return (
    <Card sx={{ position: "relative", minWidth: 275 ,height:'100%',boxShadow:3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ letterSpacing: ".25px" }}>
          Fashion from Streets
        </Typography>
        <Typography variant="body2">Congratulations 🎉</Typography>
        <Typography variant="h5" sx={{my:3}}>420.8k</Typography>

        <Button size="small" variant="contained" color="primary">
          View Sales
        </Button>

        <TriangleImage src=""></TriangleImage>
        <TrophyImage src="https://img.pikbest.com/origin/08/99/61/71ypIkbEsTveI.png!sw800"></TrophyImage>
      </CardContent>
    </Card>
  );
};

export default Achivement;
