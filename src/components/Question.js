const Question = ({ question }) => {
    return (
        <>
            <div className="question-container">
                {/* {console.log(question[0].options[0]['1'].imgUrl)} */}
                {/* {console.log(question.options[0]['1'].imgUrl)} */}
                {/* {console.log(question.answerOptions[0].imgUrl)} */}
                <div className="question">
                    <h2>Who is this player?</h2>
                    <div className="player-img-container">
                        <img src={`${question.imgUrl}`} alt="" />
                    </div>
                </div>
                <div className="btn-grid">
                    {question.answerOptions.map((answerOption, i) => (
                        <button className="btn" key={i}>{answerOption.answerText}</button>
                    ))}
                </div>

            </div>
            {/* <div className="controls">
                <button className="start-btn btn">Start</button>
                <button className="next-btn btn hide">Next</button>
            </div> */}
        </>
    );
}
 
export default Question;    