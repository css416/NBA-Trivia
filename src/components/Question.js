import { useState } from 'react';


const Question = ({ players, dispatch }) => {

    // const {dispatch} = usePlayerContext();
    const [btnColor, setBtnColor] = useState(false)
    const [disableBtn, setDisableBtn] = useState(false)
    const [header,setHeader] = useState('')

    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect === true) {
            // setScore(score + 1)
            dispatch({type: 'INCREMENT_SCORE'});
            setBtnColor(true);
            setDisableBtn(true);
            setHeader('You are correct!');
        } else {
            setHeader('You are wrong!');
            setDisableBtn(true);
            setBtnColor(true);
        }
    }

    const nextQuestion = () => {
        setHeader('');
        setBtnColor(false);
        setDisableBtn(false);
        dispatch({type: 'NEXT_QUESTION'})
    }

    return (
        <>
            <div className="question-container">
                <div className="question">
                    <h2 className={
                        header === 'You are correct!' 
                            ? "header-correct" 
                        : header === 'You are wrong!' 
                            ? "header-wrong" 
                        : ''}>
                        {header !== '' ? header : "Who is this Player?"}
                    </h2>
                    <div className="player-img-container">
                        <img className="player-img" src={`${players.imgUrl}`} alt="" />
                    </div>
                </div>
                <div className="btn-grid">
                    {players.answerOptions.map((answerOption,i) => 
                        <button key={i} 
                            className={answerOption.isCorrect && btnColor ? "btn correct" : !answerOption.isCorrect && btnColor ? "btn wrong" : "btn"} 
                            onClick={() => {handleAnswerButtonClick(answerOption.isCorrect)}}
                            disabled={disableBtn ? true : false}
                            style={ disableBtn ? { cursor:'default' } : {}}>
                                {answerOption.answerText}
                        </button>
                    )}
                </div>
            </div>
            <div className="next-btn-container">
                <button className={btnColor ? "next-btn btn correct" : "hide"} disabled={!disableBtn ? true : false} onClick={() => nextQuestion()}>Next</button>
            </div>
        </>
    );
}
 
export default Question;    