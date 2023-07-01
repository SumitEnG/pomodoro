import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import Nav from "../utils/Nav";

function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    toast.loading("loading...");
    axios
      .post("https://recipe-backend-h0yr.onrender.com/api/user/login", {
        mail: mail,
        password: password,
      })
      .then((res) => {
        toast.dismiss();
        toast.success("successfully loggedIn");
        console.log(res);
        localStorage.setItem("token", res.data[0]);
        localStorage.setItem("userId", res.data[1]);
        navigate("/");
      })
      .catch((err) => {
        toast.dismiss();
        toast.error(err.response.data);
      });
  }

  return (
    <div className="main md: bg-white">
      <div className="container max-w-md mx-auto h-screen bg-purple-400 flex flex-col shadow-lg">
        <Nav />
        <div className="container max-w-md mx-auto h-screen bg-purple-400 px-20 flex flex-col justify-center">
          <div className="c flex flex-col justify-around h-1/4">
            {" "}
            <TextField
              variant="outlined"
              label="e-mail"
              className="m-4"
              onChange={(e) => setMail(e.target.value)}
            ></TextField>
            <TextField
              variant="outlined"
              label="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
            <Button color="primary" variant="contained" onClick={handleLogin}>
              sign-in
            </Button>
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
