import React, { useEffect , useState} from 'react'
import axios from "axios"
import { Button, CircularProgress } from '@mui/material';
import "./Quiz.css"

const Quiz = () => {
  
  let url = "https://quizapi.io/api/v1/questions?apiKey=QZVXFNuqJYR6x8DGAM2JDc2vIIiQUjOWIujIBFRh&&limit=10"
  const [myData, setMyData] = useState([]);
  // const myData = [];
  const [name, setName] = useState(localStorage.getItem("name"));
  const [difficulty, setDifficulty] = useState(localStorage.getItem("difficulty"));
  const [category, setCategory] = useState(localStorage.getItem("category"));
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const getApiData = async () => {
    const res = await axios.get(
      `https://quizapi.io/api/v1/questions?apiKey=QZVXFNuqJYR6x8DGAM2JDc2vIIiQUjOWIujIBFRh&&limit=10&&category=${category}&&difficulty=${difficulty}`
    );
    setMyData(res.data)
  }
  
  useEffect(() => {
    getApiData();
  }, []);

  console.log(myData);

  // axios.get(url)  
  //     .then(res => {  
  //       const questions = res.data;  
  //       this.setState({ questions }); 
  //       console.log(questions); 
  // })  

  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>

      {myData ? (
        <>
          <div className="quizInfo">
            <span>{category}</span>
            <span>
              Difficulty : {difficulty}
            </span>
          </div>
          <div className="question">
      <h1>Question {index + 1} :</h1>

      <div className="singleQuestion">
        <h2>db mofmbpovieqvnievneiwfnf</h2>
        <div className="options">
          {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
          {/* {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                // onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button> */}
            {/* ))} */}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            // onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            // onClick={handleNext}
          >
            Submit
            {/* {currQues > 20 ? "Submit" : "Next Question"} */}
          </Button>
        </div>
      </div>
    </div>
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
}

export default Quiz
