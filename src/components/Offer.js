import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { CardHeader, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import StarIcon from "@mui/icons-material/Star";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SendIcon from "@mui/icons-material/Send";
const useStyles = makeStyles({
  card: {
    width: "40rem",
    padding: 6,
    marginBottom: "1rem",
  },
  box: {
    display: "flex",
    alignItems: "center",
    gap: 1,
  },
  bottomBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "1.5rem",
  },
  subheader: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  text: { fontSize: "11px" },
  keywordsText: {
    fontSize: "11px",
    backgroundColor: "#eeeeee",
    padding: "0.3rem",
    borderRadius: "15%",
    fontWeight: "bold",
  },
  button: {
    margin: 0,
    paddingBlock: 2,
    textTransform: "none",
    fontSize: "0.7rem",
  },
});
const Offer = () => {
  const classes = useStyles();

  return (
    <div>
      <Card
        className={classes.card}
        sx={{ width: { xs: "25rem", sm: "25rem", md: "35rem", lg: "40rem" } }}
      >
        <CardHeader
          action={
            <Stack direction="row" spacing={2}>
              <Box className={classes.box}>
                <IconButton>
                  <VisibilityIcon />
                </IconButton>
                <Typography sx={{ fontSize: { xs: "0.8rem" } }}>
                  {" "}
                  180 Viewers
                </Typography>
              </Box>
              <Box className={classes.box}>
                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>
                <Typography sx={{ fontSize: { xs: "0.8rem" } }}>
                  {" "}
                  Save
                </Typography>
              </Box>
            </Stack>
          }
          title={
            <Typography
              variant="h5"
              fontWeight={700}
              sx={{ fontSize: { xs: "1rem" } }}
            >
              Head-Cyber Security (VP/SVP)
            </Typography>
          }
          subheader={
            <Box className={classes.subheader} mt={1.5}>
              <Typography fontWeight={700} sx={{ fontSize: { xs: "0.8rem" } }}>
                Captiosus axons
              </Typography>
              <StarIcon sx={{ color: "#f7b751" }} />
              <Typography sx={{ fontSize: { xs: "0.8rem" } }}>
                (150 reviews){" "}
              </Typography>
            </Box>
          }
        />
        <CardContent>
          <Stack direction="row" spacing={2} mt={-2}>
            <Box className={classes.box}>
              <WorkOutlineIcon />
              <Typography
                className={classes.text}
                sx={{ fontSize: { xs: "0.8rem" } }}
              >
                1-2 Yrs
              </Typography>
            </Box>
            <Box className={classes.box}>
              <AttachMoneyIcon />
              <Typography
                className={classes.text}
                sx={{ fontSize: { xs: "0.8rem" } }}
              >
                50K-60K
              </Typography>
            </Box>
            <Box className={classes.box}>
              <LocationOnIcon />
              <Typography
                className={classes.text}
                sx={{ fontSize: { xs: "0.8rem" } }}
              >
                Sousse/Tunis
              </Typography>
            </Box>
          </Stack>

          <Box className={classes.box} mt={2}>
            <AssignmentIcon />
            <Typography
              className={classes.text}
              sx={{ fontSize: { xs: "0.8rem" } }}
            >
              Bachelor or equal in technical degree must have..
            </Typography>
          </Box>
          <Box className={classes.bottomBox}>
            <Stack direction="row" spacing={2}>
              <Typography
                className={classes.keywordsText}
                sx={{
                  fontSize: { xs: "0.8rem" },
                }}
              >
                ReactJs
              </Typography>
              <Typography
                className={classes.keywordsText}
                sx={{
                  fontSize: { xs: "0.8rem" },
                }}
              >
                Web
              </Typography>
              <Typography
                className={classes.keywordsText}
                sx={{
                  fontSize: { xs: "0.8rem" },
                }}
              >
                Test
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Button
                sx={{ width: { xs: "5rem" }, p: { xs: "0.2rem" } }}
                className={classes.button}
                variant="outlined"
                color="secondary"
                startIcon={<VisibilityIcon />}
              >
                View
              </Button>
              <Button
                sx={{ width: { xs: "5rem" }, p: { xs: "0.2rem" } }}
                className={classes.button}
                variant="contained"
                color="secondary"
                startIcon={<SendIcon />}
              >
                Apply
              </Button>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default Offer;
