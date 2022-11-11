import React, { useEffect, useState } from 'react';
import './Cart.css'
import img from '../../img/indian-school-girl-happy-elementary-school-pupil-back-school_71593-1071.webp'
const Cart = (props) => {
  const {cart} = props
  const [ten, setTen] = useState(0);
  let time = 0;

  for(const data of cart ){
    time = time + data.time
  }
  const timeBtn = (dosh) =>{
   setTen(dosh)
   localStorage.setItem('break-time', dosh)
  }
  useEffect(() =>{
    const getValue = localStorage.getItem('break-time')
    setTen(getValue)
  }, [])
    return (
        <div className='cart'>
            <div className='profile'>
                <img src = {img} alt =""/>
                <div className='profile-details'>
                    <h4>Apollo Chowdhury</h4>
                    <p>Location: Chittagong Rangamati</p>
                    </div>
            </div>
            <div className='physical-structure'>
            <div className='structure'>
                <h3>25yrs</h3>
                <p>Age</p>
                </div>
            <div className='structure'>
                <h3>5'6</h3>
                <p>Height</p>
                </div>
            <div className='structure'>
                <h3>70kg</h3>
                <p>Weight</p>
                </div>
            </div>
          <div >
            <h4>Add a break</h4>
            <div className='break'>
                <button onClick={() => timeBtn(10)} className='break-time'>10s</button>
                <button onClick={() => timeBtn(20)}  className='break-time'>20s</button>
                <button onClick={() => timeBtn(30)}  className='break-time'>30s</button>
                <button onClick={() => timeBtn(40)}  className='break-time'>40s</button>
                <button onClick={() => timeBtn(50)}  className='break-time'>50s</button>
            </div>
          </div>
          <div>
            <h2>Exercise Details</h2>
            <div className='time'>
              <p>Exercise Time   {time}</p>
            </div>
            <div className='time'>
             <p>Break Time   {ten}</p>
            </div>
          </div>
          <button className='btn-cart'>
                <h5 className='btn-text'>Activity Complete</h5>
            </button>
        </div>
    );
};

export default Cart;