import { TextField, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";

import axios from "axios";
import { ResponceContext } from "../context/ResponseContext";

const Lform = () => {
  const [details, setDetails] = useContext(ResponceContext);
  const [fname, setFname] = useState("");
  const [sname, setSname] = useState("");

  const options = {
    method: "GET",
    url: "https://love-calculator.p.rapidapi.com/getPercentage",
    params: { sname: sname, fname: fname },
    headers: {
      "X-RapidAPI-Key": "c14b3d0bacmsh77912aafa6e81e3p16c885jsna78dbb61726e",
      "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
    },
  };

  const btnClick = () => {
    axios
      .request(options)
      .then(function (response) {
        setDetails(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <center>
      <Box>
        <TextField
          onChange={(e) => setFname(e.target.value)}
          id="fname"
          label="First Name"
          variant="outlined"
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <TextField
          onChange={(e) => setSname(e.target.value)}
          id="sname"
          label="Second Name"
          variant="outlined"
        />
        <Button
          sx={{ mt: 1, ml: 1 }}
          onClick={btnClick}
          size="large"
          variant="secondary"
        >
          Calculate
        </Button>
        <br />
        <Typography color="secondary" sx={{fontSize:'16rem'}} variant="h1">{details.percentage}</Typography>
        <Typography sx={{fontSize:'2rem'}} variant="p">
          <i>{details.result}</i>
        </Typography>
      </Box>
    </center>
  );
};

export default Lform;
