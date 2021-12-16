import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import { Button, Typography } from "@mui/material";

const appointmentBanner = {
  background: `url(${bg})`,
  marginTop: "150px",
  backgroundColor: "rgba(115, 118, 147, 0.9)",
  backgroundBlendMode: "darken, luminosity",
  backgroundPosition: "center",
};

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: 400, marginTop: -110 }}
            src={doctor}
            alt="doctor"
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{display:'flex', justifyContent:'flex-start', alignItems:'center', textAlign:"left"}}>
          <Box>
            <Typography variant="h6" sx={{mb:4}} style={{ color: "#46D6D8" }}>
              Appointment
            </Typography>
            <Typography variant="h4" style={{ color: "white" }}>
              Make an Appointment Today
            </Typography>
            <Typography
              variant="h6"
              sx={{my:4}}
              style={{ color: "white", fontSize: 13, fontWeight: 300 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              commodi magni quo itaque aliquam vel temporibus quidem labore
              neque consequuntur.
            </Typography>
            <Button variant="contained">Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
