import React, { useEffect } from 'react';
import './Gym.css'
const Gym = () => {
    useEffect(() =>{
        fetch('fakeData.json')
        .then(res => res.json()
        .then(data => console.log(data)))
    }, [])
    return (
        <div>
         <div className='exercise'>
          <h1>Gym Club</h1>
          <h4>Select Today's Exercise </h4>
         <div>

         </div>
         </div>
         <div className='cart'></div>
        </div>
    );
};

export default Gym;