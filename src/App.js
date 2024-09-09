import "./App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useRef } from "react";

function App() {
  const textRef = useRef("");
  const [total, setTotal] = useState(0);
  const [isSum, setIsSum] = useState(false);
  const add = () => {
    let sum = 0;
    let delimeter = ",";
    let str = textRef.current.value;
    if (str === "") {
      setIsSum(true);
      setTotal(0);
    } else {
      if (str.includes("//")) {
        delimeter = str[2];
        let arr = str
          .split("//")[1]
          .split("\\n")
          .join(delimeter)
          .split(delimeter);
        console.log(delimeter, arr);
        arr.forEach((a) => {
          sum += Number(a);
        });
        setIsSum(true);
        setTotal(sum);
      } else {
        let arr = str.split("\\n").join(delimeter).split(delimeter);
        arr.forEach((a) => {
          sum += Number(a);
        });
        setIsSum(true);
        setTotal(sum);
      }
    }
  };
  return (
    <div className="App">
      <h1>Find Sum With String!</h1>
      <h3>
        Please enter a string comma-separated to find the sum, For Example -
        3,5,7
      </h3>
      <h4>
        If you want to write custom delimeter, the beginning of the string will
        contain a separate line that looks like this: //[delimeter]\n[numbers].
        For Example - //;\n3;5;7
      </h4>
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
      <Button variant="contained" onClick={add}>
        CALCULATE
      </Button>
      {isSum ? <h2>The Sum Is : {total}</h2> : ""}
    </div>
  );
}

export default App;
