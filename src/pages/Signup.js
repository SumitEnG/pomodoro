import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Nav from "../utils/Nav";

function Signup() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  const navigate = useNavigate();

  const showSuccessToast = () => {
    toast.success("Registered successfully , go to login page");
  };

  function handleSignup() {
    if (password != Cpassword) {
      alert("password not matched");
      return;
    }

    toast.loading("loading...");

    axios
      .post("https://recipe-backend-h0yr.onrender.com/api/user/signup", {
        name: name,
        mail: mail,
        password: password,
      })
      .then((res) => {
        toast.dismiss();
        showSuccessToast();
        setSignedUp(true);
        console.log(res);
      })
      .catch((err) => {
        toast.dismiss();
        toast.error(err.response.data);
        console.log(err.response.data);
      });
  }

  return (
    <div className="main md: bg-white">
      <div className="container max-w-md mx-auto h-screen bg-purple-400 flex flex-col ">
        <Nav />
        <div className="container max-w-md mx-auto h-screen bg-purple-400 px-20 flex flex-col justify-center">
          <div className="c flex flex-col justify-around h-1/2">
            {" "}
            <TextField
              variant="outlined"
              label="username"
              className="m-4"
              onChange={(e) => setName(e.target.value)}
            ></TextField>
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
            <TextField
              variant="outlined"
              label="confirm-password"
              type="password"
              onChange={(e) => setCPassword(e.target.value)}
            ></TextField>
            <Button color="primary" variant="contained" onClick={handleSignup}>
              sign-up
            </Button>
            {signedUp ? (
              <Button
                color="primary"
                variant="contained"
                onClick={() => navigate("/login")}
              >
                Go-to login
              </Button>
            ) : (
              <></>
            )}
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
