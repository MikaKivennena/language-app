import {useState} from 'react';

const Score = (props) => {
    const[score, setScore] = useState(score + props.score);

    return(
        <div>
        <p>{score}/{props.maxAmount}</p>
        </div>
    );
}


export default Score;