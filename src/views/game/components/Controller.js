import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      maxWidth: '500px',
      width: '100%',
      padding: '20px'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      "&:hover": {
          cursor: 'pointer',
          background: "grey"
      }
    },
  }));

export default function Controller(props) {
    const classes = useStyles();
    const { moveCallerN, moveCallerS, moveCallerE, moveCallerW } = props;

    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper} onClick={moveCallerN}>North 👆</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} onClick={moveCallerS}>South 👇	</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} onClick={moveCallerE}>East 👉</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} onClick={moveCallerW}>West 👈</Paper>
          </Grid>
        </Grid>
      </div>
    );
}