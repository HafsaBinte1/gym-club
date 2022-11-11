import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Exercise from '../Exercise/Exercise';
import './Gym.css'
const Gym = () => {
    const [exercises, setExercise] = useState([]) 
    const [cart, setCart] = useState([])
    useEffect(() =>{
        fetch('fakeData.json')
        .then(res => res.json()
        .then(data => setExercise(data)))
    }, [])

    const addTolist = (time) =>{
    const newCart = [...cart, time];
    setCart(newCart);
    }

    return (
        <div className='gym-container'>
         <div className='main-exercise'>
          <h1>Gym Club</h1>
          <h4>Select Today's Exercise </h4>
          <div className='exercise'>
          {
            exercises.map(exercise => <Exercise
            key = {exercise.id}
            exercise = {exercise}
            addTolist = {addTolist}>
            </Exercise>)
          }
         </div>
         </div>
         <div className='cart'>
        <Cart cart = {cart}></Cart>
         </div>
        </div>
    );
};

export default Gym;