import "./App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useRef } from "react";

function App() {
  const textRef = useRef("");
  const [total, setTotal] = useState(0);
  const [isSum, setIsSum] = useState(false);
  const findSum = () => {
    if (textRef.current.value === "") {
      setIsSum(true);
      setTotal(0);
    } else {
      let arr = textRef.current.value.split(",");
      let sum = 0;
      arr.forEach((a) => {
        sum += Number(a);
      });
      setIsSum(true);
      setTotal(sum);
    }
  };
  return (
    <div className="App">
      <h1>Find Sum With String!</h1>
      <h3>
        Please enter a string comma-separated to find the sum, Example - 3,5,7
      </h3>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "35ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          inputRef={textRef}
          id="outlined-basic"
          label="Sum String"
          variant="outlined"
        />
      </Box>
      <Button variant="contained" onClick={findSum}>
        CALCULATE
      </Button>
      {isSum ? <h2>The Sum Is : {total}</h2> : ""}
    </div>
  );
}

export default App;
