import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: 350,
    margin: "auto",
    color: "red"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  text: {
    width: "100%",
    maxWidth: 500,
    margin: "auto"
  }
}));

const Login = (props) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    username: "",
    password: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem('username', values.username)
    axios.post("https://sharknado-trail.herokuapp.com/api/login/", values)
    .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token);
        props.history.push('/game');
    })
    .catch(err => {
        console.log(err);
    })
  };

  return (
    <div style={{ height: "auto" }} className="login-form">
      <div style={{ backgroundColor: "white", padding: 25 }}>
        <div className={classes.text} style={{}}>
          <Typography variant="h4" gutterBottom align="center">
            Login
          </Typography>
        </div>
        <form
          onSubmit={e => this.handleSubmit(e)}
          className={classes.container}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="username"
            label="Username"
            className={classes.textField}
            value={values.username}
            onChange={handleChange("username")}
            margin="normal"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            className={classes.textField}
            value={values.password}
            onChange={handleChange("password")}
            margin="normal"
            variant="outlined"
            fullWidth
          />

          <Button
            className="submit"
            id="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.button}
            onClick={e => handleSubmit(e)}
          >
            Login
          </Button>
          <br />

          <div className={classes.text}>
            <Typography variant="body1" gutterBottom align="center">
              Don't have an account yet? <Link to="/register">Register</Link>
            </Typography>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login