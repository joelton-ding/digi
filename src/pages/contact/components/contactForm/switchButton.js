import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
// import FormGroup from '@material-ui/core/FormGroup';

const AntSwitch = withStyles(theme => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex"
  },
  switchBase: {
    padding: 2,
    color: '#ffffff',
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main
      }
    }
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none"
  },
  track: {
    border: `1px solid #CEDEEC`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: '#CEDEEC'
  },
  checked: {}
}))(Switch);

export default function SwitchButton({ onChange, reset }) {
  const [state, setState] = React.useState({
    checkedYes: false
  });

  useEffect(() => {
    if(reset) {
      setState({
        checkedYes: false
      })
    }
  }, [reset])

  const handleChange = name => event => {
    setState({ [name]: event.target.checked });
    onChange(event.target.checked)
  };

  return (
    // <FormGroup>
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>No</Grid>
        <Grid item>
          <AntSwitch
            checked={state.checkedYes}
            onChange={handleChange("checkedYes")}
            value="checkedYes"
          />
        </Grid>
        <Grid item>Yes</Grid>
      </Grid>
    // </FormGroup>
  );
}
