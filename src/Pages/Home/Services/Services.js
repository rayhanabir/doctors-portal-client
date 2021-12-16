import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import Service from "../Service/Service";

const services = [
  {
    name: "Flouride Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et similique aliquid minus alias sint, necessitatibus libero porro. Sit, architecto quod, nam a ipsam voluptatum perferendis beatae mollitia quae error placeat.",
    image: fluoride,
  },
  {
    name: "Cavity Filling",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et similique aliquid minus alias sint, necessitatibus libero porro. Sit, architecto quod, nam a ipsam voluptatum perferendis beatae mollitia quae error placeat.",
    image: cavity,
  },
  {
    name: "Teath whitening",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et similique aliquid minus alias sint, necessitatibus libero porro. Sit, architecto quod, nam a ipsam voluptatum perferendis beatae mollitia quae error placeat.",
    image: whitening,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography variant="h6" sx={{fontWeight:500, m:2, color: 'info.main' }} component="div">
            Our Services
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 600, m:4 }} component="div">
            Services We Provide
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
