import React, { useEffect , useState} from 'react'
import axios from "axios"


const Quiz = () => {
  
  let url = "https://quizapi.io/api/v1/questions?apiKey=QZVXFNuqJYR6x8DGAM2JDc2vIIiQUjOWIujIBFRh&&limit=10"
  const [myData, setMyData] = useState([]);

  // axios.get(url)  
  //     .then(res => {  
  //       const questions = res.data;  
  //       this.setState({ questions }); 
  //       console.log(questions); 
  // })  

  const getApiData = async () => {
    const res = await axios.get(url);
    setMyData(res.data)
  }
  
  useEffect(() => {
    getApiData();
  }, []);

  console.log(myData);
  return (
    <div>
      Quiz page
    </div>
  )
}

export default Quiz
