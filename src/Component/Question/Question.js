import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='questions'>
        <div className='question'>
            <h1>How Does React Work</h1>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
        </div>
        <div className='question'>
            <h1>Difference between props and state</h1>
            <p>props are passed via component properties, they're not reactive. State are variables that react will react , updating the UI when values changes. I think what is meant by "props should not be changed" is that they should not be changed by children components.</p>
        </div>
        <div className='question last'>
            <h1>Where we can use useEffect</h1>
            <p>What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</p>
        </div>
    </div>
);

};

export default Question;