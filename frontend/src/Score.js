import {useState} from 'react';

const Score = (props) => {
    const[score, setScore] = useState(props.score);

    return(
        <div>
        <p>{score}/10</p>
        </div>
    );
}


export default Score;