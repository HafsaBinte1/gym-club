import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Exercise from '../Exercise/Exercise';
import './Gym.css'
const Gym = () => {
    const [exercises, setExercise] = useState([]) 
    useEffect(() =>{
        fetch('fakeData.json')
        .then(res => res.json()
        .then(data => setExercise(data)))
    }, [])
    return (
        <div className='gym-container'>
         <div className='main-exercise'>
          <h1>Gym Club</h1>
          <h4>Select Today's Exercise </h4>
          <div className='exercise'>
          {
            exercises.map(exercise => <Exercise
            key = {exercise.id}
            exercise = {exercise}>
            </Exercise>)
          }
         </div>
         </div>
         <div className='cart'>
        <Cart></Cart>
         </div>
        </div>
    );
};

export default Gym;