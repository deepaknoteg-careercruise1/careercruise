import React from "react";
import { Box, Typography, Link } from "@mui/material";

const primaryColor = "#18A0C3";
const secondaryColor = "#FFFFFF";

const Footer = () => {
   return (
      <Box
         sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: primaryColor,
            padding: "20px",
            textAlign: "center",
         }}
      >
         <Typography variant="h6" component="div" sx={{ color: secondaryColor }}>
            <Link
               href="mailto:contact@careercruiseconsulting.com"
               sx={{ color: secondaryColor, textDecoration: "none" }}
            >
               contact@careercruiseconsulting.com
            </Link>
         </Typography>
         <Typography variant="body2" sx={{ color: secondaryColor, mt: 1 }}>
            © {new Date().getFullYear()} Career Cruise Consulting. All rights reserved.
         </Typography>
      </Box>
   );
};

export default Footer;
