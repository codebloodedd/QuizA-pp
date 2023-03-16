import { Button, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import React from 'react'
import "./Home.css"
const Home = (props) => {

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // console.log("entered handle submit");
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      // props.getApiData(category, difficulty);
      localStorage.clear();
      localStorage.setItem("name",name);
      localStorage.setItem("category", category);
      localStorage.setItem("difficulty", difficulty);
      navigate("/quiz");
    }
  };

  return (
    <div className='content'>
        <div className='settings'>
            <span style={{fontSize: 30}}>Quiz settings</span>
        
        <div className="settings__select">
          {error && <p className="errormessage">Please Fill all the feilds</p>}
          <TextField
            className="text-field"
            style={{ marginBottom: 25 , textAlign: "left"}}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            className="text-field"
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 , textAlign: "left"}}
          >
            {/* {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))} */}
          </TextField>
          <TextField
            select
            className="text-field"
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 , textAlign: "left"}}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
        </div>
        <img src={process.env.PUBLIC_URL + '/quizImage.svg'} className='banner' alt='quiz'/>
    </div>
  )
}

export default Home
