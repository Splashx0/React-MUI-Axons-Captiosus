import React from "react";
import Offer from "../components/Offer";
import Grid from "@mui/material/Grid";
import SideCard from "../components/SideCard";
import Navbar from "../components/Navbar";
import { Typography } from "@mui/material";
import Filter from "../components/Filter";
const Home = () => {
  return (
    <>
      <Navbar />
      <Grid container spacing={3} mt={3} p={3}>
        <Grid item lg={3} mt={8}>
          <Filter />
        </Grid>
        <Grid item lg={6} mt={5}>
          <Typography>1-20 of 84 Information Technology Jobs</Typography>
          <Offer />
        </Grid>
        <Grid item lg={3} mt={8}>
          <SideCard />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
