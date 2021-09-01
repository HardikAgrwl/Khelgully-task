// import TextField from "@material-ui/core/TextField";
import { Button, FormControl, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const teams = [
  {
    value: "",
    label: "",
  },
  {
    value: "team1",
    label: "team1",
  },
  {
    value: "team2",
    label: "team2",
  },
  {
    value: "team3",
    label: "team3",
  },
  {
    value: "team4",
    label: "team4",
  },
];

const players = [
  {
    value: "",
    label: "",
  },
  {
    value: "player1",
    label: "player1",
  },
  {
    value: "player2",
    label: "player2",
  },
  {
    value: "player3",
    label: "player3",
  },
  {
    value: "player4",
    label: "player4",
  },
  {
    value: "player5",
    label: "player5",
  },
  {
    value: "player6",
    label: "player6",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(7),
    width: "50vw",
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      minWidth: "20ch",
      width: "60%",
    },
  },
  inputField: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(5),
    minWidth: "20ch",
    width: " 60%",
  },
}));

export default function MultilineTextFields() {
  let classes = useStyles();
  const [team, setTeam] = useState("");
  const [player, setPlayer] = useState("");

  const handleTeamChange = (event) => {
    setTeam(event.target.value);
  };

  const handlePlayerChange = (event) => {
    setPlayer(event.target.value);
  };

  return (
    <FormControl className={classes.root}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.inputField}
      >
        <Grid xs={12} sm={4}>
          <label for="team-select">Select Team</label>
        </Grid>
        <Grid xs={12} sm={8}>
          <TextField
            id="team-select"
            select
            label="Select team"
            value={team}
            onChange={handleTeamChange}
            SelectProps={{
              native: true,
            }}
            variant="outlined"
          >
            {teams.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.inputField}
      >
        <Grid xs={12} sm={4}>
          <label for="player-select">Select Team</label>
        </Grid>
        <Grid xs={12} sm={8}>
          <TextField
            id="player-select"
            select
            label="Select Player"
            value={player}
            onChange={handlePlayerChange}
            SelectProps={{
              native: true,
            }}
            variant="outlined"
          >
            {players.map((player) => (
              <option key={player.value} value={player.value}>
                {player.label}
              </option>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Grid sm={4} xs={0}></Grid>
        <Grid xs={12} sm={8}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Pay & Register
          </Button>
        </Grid>
      </Grid>
    </FormControl>
  );
}
