
import './Exercise.css'
const Exercise = (props) => {
    const {img, name, details, time} = props.exercise;
    return (
        <div className='part-exercise'>
           <img src = {img} alt = ""/>
          <div className='write'>
           <h4>{name}</h4>
           <p>{details}</p>
           <h5>Time Required: {time}s</h5>
           </div>
           <div>
           <button className='btn-cart'>
                <p className='btn-text'>Add to list</p>
            </button>
           </div>
        </div>
    );
};

export default Exercise;