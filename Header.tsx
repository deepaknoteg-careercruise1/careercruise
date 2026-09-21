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
import axios from "axios";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;
const primaryColor = "#18A0C3";
const secondaryColor = "#FFFFFF";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axios.post("/api/contact", contactForm);
      alert("Thanks! Your message has been sent.");
      setContactForm({ name: "", email: "", phone: "", organization: "", message: "" });
    } catch (error) {
      alert("Something went wrong sending your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const testimonials = [
    {
      name: "Ahmed Khalid",
      role: "CEO, Horizon Technologies",
      quote:
        "Career Cruise Consulting helped us fill several key roles quickly, with candidates who were a genuinely good fit for our team and culture.",
    },
    {
      name: "Fatima Al Mansoori",
      role: "Operations Director, Gulf Innovations",
      quote:
        "Their recruitment process was thorough and professional from the first call to the final offer. We felt supported at every stage.",
    },
    {
      name: "Sultan Bin Zayed",
      role: "Founder, Zenith Construction",
      quote:
        "The team took the time to understand exactly what we needed and delivered candidates who matched our requirements closely.",
    },
    {
      name: "Laila Abbas",
      role: "Managing Director, Al Noor Enterprises",
      quote:
        "A responsive, detail-oriented staffing partner. They made hiring for a fast-moving project far less stressful.",
    },
  ];
  const menuItems = [
    { text: "Home", route: "/" },
    { text: "About Us", route: "/About" },
    { text: "Services", route: "/Services" },
    { text: "Contact", route: "/#contact" },
  ];

  return (
    <>
      <Box sx={{ display: "flex" }}>

        {/* Sidebar (Not Drawer) */}
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

          <Container maxWidth="md">
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              Find the Right <span style={{ color: primaryColor }}>Talent</span>, Faster, with Expert <span style={{ color: primaryColor }}>Staffing Solutions</span>
            </Typography>
            <Typography variant="body1" paragraph>
              Career Cruise Consulting connects businesses with skilled, vetted candidates and helps job seekers find roles that fit their experience and goals.
            </Typography>
            <NextLink href="/Services" passHref legacyBehavior>
              <Button
                component="a"
                variant="outlined"
                sx={{
                  mt: 2,
                  borderColor: primaryColor,
                  color: primaryColor,
                  '&:hover': {
                    backgroundColor: primaryColor,
                    color: secondaryColor,
                  }
                }}
              >
                Get Started Today!
              </Button>
            </NextLink>
          </Container>
          <Box component="main" sx={{ flexGrow: 1, p: 3, ml: `${drawerWidth}px` }}>
            <Toolbar />
            <Typography variant="h4" sx={{ color: primaryColor, fontWeight: "bold" }}>
              Staffing Services
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              ✔ Temporary & Contract Staffing: Skilled personnel sourced through our trusted vetting process.
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              ✔ End-to-End Recruitment: From sourcing to onboarding, we cover every detail of the hiring process.
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              ✔ Curated Candidate Selection: Access a pool of vetted professionals across roles and industries.
            </Typography>

          </Box>

          <Box sx={{ bgcolor: secondaryColor, color: "black", p: 4 }}>
            <Grid container spacing={4} alignItems="center">
              {/* Text Section */}
              <Grid item xs={12} md={6}>
                <Typography variant="h4" sx={{ fontWeight: "bold", color: primaryColor }}>
                  Comprehensive <span style={{ fontWeight: "bold" }}>Staffing Services</span>
                </Typography>

                <List>
                  {[
                    {
                      text: "Skilled personnel sourced and screened through our trusted recruitment process.",
                    },
                    {
                      text: "From sourcing to onboarding, our team covers every detail of the hiring process.",
                    },
                    {
                      text: "Access a curated pool of vetted candidates, ready for any role.",
                    },
                  ].map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircleIcon sx={{ color: primaryColor }} />
                      </ListItemIcon>
                      <Typography variant="body1">
                        <strong>{item.text}</strong>
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Grid>

              {/* Image Section */}
              <Grid item xs={12} md={6} textAlign="center">
                <Box
                  component="img"
                  src="/images/3d-job-applicant-illustration-png.webp"
                  alt="Career Cruise Consulting candidate illustration"
                  sx={{ width: "100%", maxWidth: 420, borderRadius: "8px" }}
                />
              </Grid>
            </Grid>

            {/* Services Section */}
            <Box sx={{ textAlign: "center", mt: 6 }}>
              <Box
                component="img"
                src="/images/logo.png"
                alt="Career Cruise Consulting logo"
                sx={{ width: "160px", marginBottom: "20px" }}
              />
              <Typography variant="h4" sx={{ color: primaryColor, fontWeight: "bold" }}>
                Services.
              </Typography>
            </Box>
          </Box>
          <Typography variant="h4" fontWeight="bold" color={secondaryColor}>
        What Our Clients Are <span style={{ color: primaryColor }}>Saying.</span>
      </Typography>

      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        style={{ padding: "20px", maxWidth: "80%", margin: "auto" }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Card sx={{ backgroundColor: secondaryColor, borderRadius: "10px", boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" fontStyle="italic">
                  "{testimonial.quote}"
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 2 }}>
                  <Avatar sx={{ bgcolor: primaryColor }}>{testimonial.name.charAt(0)}</Avatar>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.role}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <Grid container spacing={4} alignItems="center" id="contact" sx={{ p: 4, scrollMarginTop: "80px" }}>
        {/* Left Section - Contact Info */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, backgroundColor: primaryColor, color: secondaryColor }}>
            <Typography variant="h4" fontWeight="bold">
              Contact <span style={{ fontWeight: "lighter" }}>Information</span>
            </Typography>
            <Box display="flex" alignItems="center" mt={2}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body1">
                <strong>Email:</strong> <a href="mailto:contact@careercruiseconsulting.com" style={{ color: secondaryColor }}>contact@careercruiseconsulting.com</a>
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={2}>
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography variant="body1">
                <strong>Address:</strong> Update this with your office address
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Right Section - Contact Form */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Get in Touch
            </Typography>
            <form onSubmit={handleContactSubmit}>
              <TextField
                fullWidth label="Full Name" name="name" variant="outlined" margin="normal" required
                value={contactForm.name} onChange={handleContactChange}
              />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth label="Email" name="email" type="email" variant="outlined" margin="normal" required
                    value={contactForm.email} onChange={handleContactChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth label="Phone" name="phone" type="tel" variant="outlined" margin="normal" required
                    value={contactForm.phone} onChange={handleContactChange}
                  />
                </Grid>
              </Grid>
              <TextField
                fullWidth label="Organization Name" name="organization" variant="outlined" margin="normal" required
                value={contactForm.organization} onChange={handleContactChange}
              />
              <TextField
                fullWidth label="How can we help you?" name="message" variant="outlined" multiline rows={4} margin="normal" required
                value={contactForm.message} onChange={handleContactChange}
              />
              <Button
                type="submit" disabled={submitting} variant="contained"
                sx={{ mt: 2, backgroundColor: primaryColor, color: secondaryColor }} fullWidth
              >
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Header;
