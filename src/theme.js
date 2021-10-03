import { createTheme } from "@material-ui/core/styles";
import { blue, purple } from "@material-ui/core/colors";
import green from "@material-ui/core/colors/green";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme;
