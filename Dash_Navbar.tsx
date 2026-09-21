import React, { useState } from "react";
import NextLink from "next/link";
import {
    AppBar,
    Toolbar,
    Typography,
    List,
    ListItem,
    ListItemText,
  ListItemButton,
    TextField,
    Paper,
    Container,
    Box,
    Button,
    ListItemIcon,
    IconButton, Card, CardContent, Avatar, Grid
} from "@mui/material";

const drawerWidth = 240;
const primaryColor = "#18A0C3";
const secondaryColor = "#FFFFFF";

const menuItems = [
    { text: "Home", route: "/" },
    { text: "About Us", route: "/About" },
    { text: "Services", route: "/Services" },
    { text: "Contact", route: "/#contact" },
];

function Dash_Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    // Toggle Sidebar
    const handleToggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <div>

<Box
          sx={{
            width: sidebarOpen ? drawerWidth : 0,
            overflow: "hidden",
            transition: "width 0.3s ease-in-out",
            backgroundColor: primaryColor,
            color: secondaryColor,
            height: "100%",
            position: "fixed",
            left: 0,
            top: 0,
            paddingTop: "64px", 
          }}
        >
          <List>
      {menuItems.map(({ text, route }) => (
        <NextLink href={route} key={text} passHref legacyBehavior>
          <ListItemButton component="a">
            <ListItemText primary={text} />
          </ListItemButton>
        </NextLink>
      ))}
    </List>
        </Box>

        </div>
    )
}

export default Dash_Navbar