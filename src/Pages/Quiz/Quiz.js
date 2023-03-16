import React, { useEffect , useState} from 'react'
import axios from "axios"
import { Button, CircularProgress } from '@mui/material';
import "./Quiz.css"

const Quiz = () => {
  
  let url = "https://quizapi.io/api/v1/questions?apiKey=QZVXFNuqJYR6x8DGAM2JDc2vIIiQUjOWIujIBFRh&&limit=10"
  const [myData, setMyData] = useState();
  // const myData = [];
  const [name, setName] = useState(localStorage.getItem("name"));
  const [difficulty, setDifficulty] = useState(localStorage.getItem("difficulty"));
  const [category, setCategory] = useState(localStorage.getItem("category"));
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState();
  const getApiData = async () => {
    const res = await axios.get(
      `https://quizapi.io/api/v1/questions?apiKey=QZVXFNuqJYR6x8DGAM2JDc2vIIiQUjOWIujIBFRh&&limit=10&&category=${category}&&difficulty=${difficulty}`
    );
    setMyData(res.data)
  }
  
  useEffect(() => {
    getApiData();
  }, [1]);

  console.log(myData);

  const handleNext = (e)=>{
    e.preventDefault();
    setIndex(index+1)
  }
  const handlePrevious = (e)=>{
    e.preventDefault();
    setIndex(index-1)
  }
  const handleClick = (button) =>{
    if (button === myData[index].correct_answer) {
      setScore(score+1)
    }
  }
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
        <h2>{myData[index].question}</h2>
        <div className="options">
          {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
          {/* {myData[index].answers &&
            myData[index].answers.map((i) => (
              <button
                // className={`singleOption  
                // ${selected && handleSelect(i)}`
                // }
                key={i}
                // onClick={() => handleCheck(i)}
                // disabled={selected}
              >
                {i}
              </button>
           ))} */}
          {
            myData[index].answers.answer_a ? (
              <button
              className={selected==="answer_a"?("singleOption selected"):("singleOption")}
              // onClick = {handleClick("answer_a")}
              >
                {myData[index].answers.answer_a}
              </button>
            ):null
          }
          {
            myData[index].answers.answer_b ? (
              <button
              className='singleOption'>
                {myData[index].answers.answer_b}
              </button>
            ):null
          }
          {
            myData[index].answers.answer_c ? (
              <button
              className='singleOption'>
                {myData[index].answers.answer_c}
              </button>
            ):null
          }
          {
            myData[index].answers.answer_d ? (
              <button
              className='singleOption'>
                {myData[index].answers.answer_d}
              </button>
            ):null
          }
          {
            myData[index].answers.answer_e ? (
              <button
              className='singleOption'>
                {myData[index].answers.answer_e}
              </button>
            ):null
          }
          {
            myData[index].answers.answer_f ? (
              <button
              className='singleOption'>
                {myData[index].answers.answer_f}
              </button>
            ):null
          }
        </div>
        <div className="controls">
          <Button
            variant='contained'
            color='primary'
            size='large'
            style={{width:185}}
            onClick={handlePrevious}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {index>10 ? "Submit" : "Next"}
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
