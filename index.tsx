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
    MenuItem,
    TextField,
    Paper,
    Container,
    Box,
    Button,
    ListItemIcon,
    IconButton, Card, CardContent, Avatar, Grid
} from "@mui/material";
import axios from "axios";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;
const primaryColor = "#18A0C3";
const secondaryColor = "#FFFFFF";

function index() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    
        // Toggle Sidebar
        const handleToggleSidebar = () => {
            setSidebarOpen(!sidebarOpen);
        };
        const menuItems = [
            { text: "Home", route: "/" },
            { text: "About Us", route: "/About" },
            { text: "Services", route: "/Services" },
            { text: "Contact", route: "/#contact" },
        ];

        const [formData, setFormData] = useState({
            firstName: "",
            lastName: "",
            email: "",
            contactNum: "",
            applyFor: "",
            currentCTC: "",
            expectedCTC: "",
            noticePeriod: "",
            location: "",
            currentLocation: "",
            preferredLocation: "",
            mode: "",
            totalExperience: "",
            expertise: "",
            experience: "",
            clients: "",
            successfulPlacements: ""
          });
        
          const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          };
        
          const handleSubmit = async (e) => {
            e.preventDefault();
            try {
              const response = await axios.post("/api/apply", formData);
              alert("Application submitted successfully!");
            } catch (error) {
              alert("Error submitting application");
            }
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
            paddingTop: "64px", // To avoid overlap with AppBar
          }}
        >
          <List>
            {menuItems.map(({ text, route }) => (
              <NextLink href={route} key={text} passHref legacyBehavior>
                <ListItemButton component="a">
                  <ListItemText sx={{color:"#fff"}} primary={text} />
                </ListItemButton>
              </NextLink>
            ))}
          </List>
        </Box>

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            ml: sidebarOpen ? `${drawerWidth}px` : 0,
            transition: "margin 0.3s ease-in-out",
            backgroundColor: secondaryColor,
            height: "100%",
            width: `calc(100% - ${sidebarOpen ? drawerWidth : 0}px)`,
          }}
        >
          {/* Top Navbar */}
          <AppBar position="fixed" sx={{ width: "100%", backgroundColor: primaryColor }}>
            <Toolbar>
              {/* Toggle Sidebar Button */}
              <IconButton edge="start" color="inherit" onClick={handleToggleSidebar} sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>

              <Typography variant="h6" noWrap sx={{ color: secondaryColor }}>
                Career Cruise Consulting
              </Typography>
            </Toolbar>
          </AppBar>

          <Toolbar />


          <Box sx={{ backgroundColor: secondaryColor, padding: 3, borderRadius: 2 }}>
        <Typography variant="h4" sx={{ color: primaryColor, marginBottom: 2 }}>Apply for Job</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}><TextField fullWidth label="First Name" name="firstName" onChange={handleChange} /></Grid>
            <Grid item xs={6}><TextField fullWidth label="Last Name" name="lastName" onChange={handleChange} /></Grid>
            <Grid item xs={6}><TextField fullWidth label="Email" name="email" type="email" onChange={handleChange} /></Grid>
            <Grid item xs={6}><TextField fullWidth label="Contact Number" name="contactNum" onChange={handleChange} /></Grid>
            <Grid item xs={12}><TextField fullWidth label="Apply for Profile" name="applyFor" onChange={handleChange} /></Grid>
            <Grid item xs={6}><TextField fullWidth label="Current CTC" name="currentCTC" onChange={handleChange} /></Grid>
            <Grid item xs={6}><TextField fullWidth label="Expected CTC" name="expectedCTC" onChange={handleChange} /></Grid>
            <Grid item xs={6}><TextField fullWidth label="Notice Period" name="noticePeriod" onChange={handleChange} /></Grid>
            <Grid item xs={6}><TextField fullWidth label="Current Location" name="currentLocation" onChange={handleChange} /></Grid>
            <Grid item xs={6}><TextField fullWidth label="Preferred Location" name="preferredLocation" onChange={handleChange} /></Grid>
            <Grid item xs={6}>
              <TextField select fullWidth label="Mode" name="mode" onChange={handleChange}>
                <MenuItem value="Work from Home">Work from Home</MenuItem>
                <MenuItem value="Work from Office">Work from Office</MenuItem>
                <MenuItem value="Freelance">Freelance</MenuItem>
                <MenuItem value="Hybrid">Hybrid</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={6}><TextField fullWidth label="Total Experience" name="totalExperience" onChange={handleChange} /></Grid>
            <Grid item xs={12}><TextField fullWidth label="Expertise" name="expertise" onChange={handleChange} /></Grid>
            <Grid item xs={6}><TextField fullWidth label="Experience" name="experience" onChange={handleChange} /></Grid>
            <Grid item xs={6}><TextField fullWidth label="Clients" name="clients" onChange={handleChange} /></Grid>
            <Grid item xs={6}><TextField fullWidth label="Successful Placements" name="successfulPlacements" onChange={handleChange} /></Grid>
          </Grid>
          <Button type="submit" variant="contained" sx={{ backgroundColor: primaryColor, marginTop: 2 }}>Submit</Button>
        </form>
      </Box>


          </Box>
    </div>
  )
}

export default index