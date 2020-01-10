import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      margin: '10 auto',
      paddingLeft: '15%'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function Map(props) {
    const classes = useStyles();

    function FormRow() {
        return (
          <React.Fragment>
            <Grid item xs={1}>
              <Paper className={classes.paper}>0</Paper>
            </Grid>
            <Grid item xs={1}>
              <Paper className={classes.paper}>0</Paper>
            </Grid>
            <Grid item xs={1}>
              <Paper className={classes.paper}>0</Paper>
            </Grid>
          </React.Fragment>
        );
      }

      return (
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid container item xs={9} spacing={3}>
              <FormRow />
              <FormRow />
              <FormRow />
              <FormRow />
            </Grid>
            <Grid container item xs={9} spacing={3}>
              <FormRow />
              <FormRow />
              <FormRow />
              <FormRow />
            </Grid>
            <Grid container item xs={9} spacing={3}>
              <FormRow />
              <FormRow />
              <FormRow />
              <FormRow />
            </Grid>
            <Grid container item xs={9} spacing={3}>
              <FormRow />
              <FormRow />
              <FormRow />
              <FormRow />
            </Grid>
            <Grid container item xs={9} spacing={3}>
              <FormRow />
              <FormRow />
              <FormRow />
              <FormRow />
            </Grid>
            <Grid container item xs={9} spacing={3}>
              <FormRow />
              <FormRow />
              <FormRow />
              <FormRow />
            </Grid>
            <Grid container item xs={9} spacing={3}>
              <FormRow />
              <FormRow />
              <FormRow />
              <FormRow />
            </Grid>
            <Grid container item xs={9} spacing={3}>
              <FormRow />
              <FormRow />
              <FormRow />
              <FormRow />
            </Grid>
            <Grid container item xs={9} spacing={3}>
              <FormRow />
              <FormRow />
              <FormRow />
              <FormRow />
            </Grid>
            <Grid container item xs={9} spacing={3}>
              <FormRow />
              <FormRow />
              <FormRow />
              <FormRow />
            </Grid>
            <Grid container item xs={9} spacing={3}>
              <FormRow />
              <FormRow />
              <FormRow />
              <FormRow />
            </Grid>
            <Grid container item xs={9} spacing={3}>
              <FormRow />
              <FormRow />
              <FormRow />
              <FormRow />
            </Grid>
          </Grid>
        </div>
    );
}