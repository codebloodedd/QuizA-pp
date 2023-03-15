import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className='content'>
        <div className='settings'>
            <span style={{fontSize: 30}}>Quiz settings</span>
        </div>
        <img src='/quizImage.svg' className='banner' alt='quiz'/>
    </div>
  )
}

export default Home
