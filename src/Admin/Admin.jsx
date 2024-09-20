import {
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CategoryIcon from "@mui/icons-material/Category";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreateProductForm from "./components/CreateProductForm";
import ProductsTable from "./components/ProductsTable";
import OrdersTable from "./components/OrdersTable";
import CustomerTable from "./components/CustomerTable";
import AdminDashboard from "./components/Dashboard";

const menu = [
  { id: 1, name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { id: 2, name: "Customers", path: "/admin/customers", icon: <PersonIcon /> },
  { id: 3, name: "Orders", path: "/admin/orders", icon: <ShoppingBagIcon /> },
  { id: 4, name: "Products", path: "/admin/products", icon: <CategoryIcon /> },
  {
    id: 5,
    name: "AddProducts",
    path: "/admin/product/create",
    icon: <AddIcon />,
  },
];
const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%", 
        bgcolor:"#158648"
      }}
    >
      <div>
      {isLargeScreen && <Toolbar/>}
      <List className="my-5">
        {menu.map((item, index) => (
          <ListItem key={index} disablePadding onClick={() => navigate(item.path)}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      </div>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  
  return (
    <div className="flex min-h-screen">
        <CssBaseline />
      <div >
            {drawer}
      </div>
      <div className="w-full">
        <Routes>
            <Route path="/" element={<AdminDashboard/>}/>
            <Route path="/product/create" element={<CreateProductForm/>}/>
            <Route path="/products" element={<ProductsTable/>}/>
            <Route path="/orders" element={<OrdersTable/>}/>
            <Route path="/customers" element={<CustomerTable/>}/>

        </Routes>
      </div>
    </div>
  );
};

export default Admin;
