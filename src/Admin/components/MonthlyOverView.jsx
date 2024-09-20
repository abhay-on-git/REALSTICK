import {
  AccountCircle,
  AttachMoney,
  Height,
  TrendingUp,
} from "@mui/icons-material";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

const salesData = [
  {
    stats: "24k",
    title: "Sales",
    color: "#e3d98d",
    icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "12.5k",
    title: "Customer",
    color: "#2fe35f",
    icon: <AccountCircle sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "1.45k",
    title: "Products",
    color: "#df4738",
    icon: <DevicesOtherIcon sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "88kk",
    title: "Revenue",
    color: "#0fb0e7",
    icon: <AttachMoneyIcon sx={{ fontSize: "1.75rem" }} />,
  },
];

const renderStats = () => {
  return salesData.map((item, index) => (
    <Grid item xs={12} sm={3} index>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: "white",
            borderRadius:1,
            background: `${item.color}`,
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="caption">{item.title}</Typography>
          <Typography variant="h6">{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ));
};

const MonthlyOverView = () => {
  return (
    <Card sx={{boxShadow:3}}>
      <CardHeader
        title="Monthly overview"
        action={
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        }
        subheader={
          <Typography variant="body2">
            <Box
              component="span"
              sx={{ fontWeight: 600, color: "text.primary" ,marginRight:1 }}
            >
              Total 48.5% growth
            </Box>
            😎 this Month
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: "2rem !important",
            letterSpacing: ".15 !important",
          },
        }}
      />
      <CardContent sx={{ pt: (theme) => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MonthlyOverView;
