import React from "react";
import { Button, Typography } from "@material-ui/core";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  helloThereStyle: {
    fontStyle: "oblique",
    color: "red",
  },
  buttonStyles: {
    color: "orange",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Typography
        className={classes.helloThereStyle}
        variant="h2"
        color="secondary"
      >
        Hello there
      </Typography>
      <Button
        className={classes.buttonStyles}
        variant="contained"
        color="primary"
      >
        Hello World
      </Button>
    </div>
  );
}

export default App;
