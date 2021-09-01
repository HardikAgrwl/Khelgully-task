import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    padding: "1rem",
  },
}));

const AppbarComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" align="center" className={classes.title}>
              Select A Team
            </Typography>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
};

export default AppbarComponent;
