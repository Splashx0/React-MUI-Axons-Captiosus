import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { CardHeader } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: {
    width: "auto",
    padding: 20,
    marginBottom: "0.9rem",
  },
  img: { width: 40, height: 40 },
});
const SideCard = () => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader
          action={
            <Avatar alt="img" src="/images/test.png" className={classes.img} />
          }
          title={
            <Typography variant="h6" fontSize={15} fontWeight={700}>
              Get Personalised Job Recommendations
            </Typography>
          }
        />
        <CardContent>
          <Typography variant="body2" sx={{ fontSize: 15, mt: -2 }}>
            Registering gives you the benefit to browse & apply variety of jobs
            based on your preferences
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            sx={{ width: 250, textTransform: "none", fontSize: 15 }}
          >
            Register Now
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardHeader
          action={
            <Avatar alt="img" src="/images/test.png" className={classes.img} />
          }
          title={
            <Typography variant="h6" fontSize={15} fontWeight={700}>
              About Producer of this App
            </Typography>
          }
        />
        <CardContent>
          <Typography variant="body2" sx={{ fontSize: 15, mt: -2 }}>
            Captiosus Axons created in 2020 specialized in the field of AI ,Big
            Data,Web Develpmenet,Mobile Dev
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            sx={{ width: 250, textTransform: "none", fontSize: 15 }}
          >
            Register Now
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
export default SideCard;
