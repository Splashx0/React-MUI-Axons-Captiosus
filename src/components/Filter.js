import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CardHeader, IconButton } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import Slider from "@mui/material/Slider";
const useStyles = makeStyles({
  card: {
    width: "auto",
    padding: 7,
    marginBottom: "0.8rem",
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
const marks = [
  {
    value: 0,
    label: "0 Yrs",
  },

  {
    value: 10,
    label: "10 Yrs",
  },
];

const Filter = () => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader
          avatar={<FilterListIcon />}
          title={
            <Typography variant="h6" fontSize={20} fontWeight={700}>
              All Filters
            </Typography>
          }
        />
        <CardContent>
          <Box className={classes.box}>
            <Typography
              variant="body2"
              sx={{ fontSize: 15, fontWeight: "bold" }}
            >
              Freshness
            </Typography>
            <IconButton>
              <KeyboardArrowDownIcon />
            </IconButton>
          </Box>
          <Box>
            <FormControl>
              <RadioGroup name="radio-buttons-group">
                <FormControlLabel
                  value="a"
                  control={<Radio />}
                  label="Last 1 day"
                />
                <FormControlLabel
                  value="b"
                  control={<Radio />}
                  label="Last 2 day"
                />
                <FormControlLabel
                  value="c"
                  control={<Radio />}
                  label="Last 7 day"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Box className={classes.box}>
            <Typography
              variant="body2"
              sx={{ fontSize: 15, fontWeight: "bold" }}
            >
              Job Type
            </Typography>
            <IconButton>
              <KeyboardArrowDownIcon />
            </IconButton>
          </Box>
          <Box>
            <FormControl>
              <RadioGroup name="radio-buttons-group">
                <FormControlLabel
                  value="a"
                  control={<Radio />}
                  label="Full-Time"
                />
                <FormControlLabel
                  value="b"
                  control={<Radio />}
                  label="Part-Time"
                />
                <FormControlLabel
                  value="c"
                  control={<Radio />}
                  label="Internship"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Box className={classes.box}>
            <Typography
              variant="body2"
              sx={{ fontSize: 15, fontWeight: "bold" }}
            >
              Experience
            </Typography>
            <IconButton>
              <KeyboardArrowDownIcon />
            </IconButton>
          </Box>
          <Box sx={{ width: "15rem" }}>
            <Slider
              color="secondary"
              defaultValue={0}
              max={10}
              step={1}
              marks={marks}
              valueLabelDisplay="on"
            />
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default Filter;
