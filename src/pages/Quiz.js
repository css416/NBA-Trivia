import { useEffect } from 'react';

import { usePlayerContext } from '../hooks/usePlayerContext';

import LoadingOverlay from '../components/LoadingOverlay';
import Navbar from '../components/Navbar';
import Score from "../components/Score";
import Question from "../components/Question-copy";

import fetchPlayers from '../hooks/FetchPlayers';

const Quiz = () => {

    const {players, currentQuestionIndex, setRestart, dispatch, isLoading, setIsLoading} = usePlayerContext();

    useEffect(() => {
        fetchPlayers({dispatch,setIsLoading})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setRestart])


    //   console.log('current index: ' + currentQuestionIndex)
    //   console.log(score)

    // const { data: questions, isPending, error } = useFetch('https://data.nba.net/data/10s/prod/v1/2022/players.json');
    // const [isCorrect, setIsCorrect] = useState(true);
    // const [isWrong, setWrong] = useState(false);

    // const [currentQuestion, setCurrentQuestion] = useState(0);
    // const [score, setScore] = useState(0);
    // const [finish, setFinish] = useState(0);

    // const {test, dispatch} = usePlayerContext();

    console.log(players)
    return (  
        // <main className={isCorrect ? "correct" : isWrong ? "wrong" : "" }>
        <>
        <Navbar />
        <main>
            {/* <button onClick={() => dispatch({type: 'NEXT_QUESTION'})}>{currentQuestionIndex}</button> */}
            {/* { error && <div>{ error }</div>} */}
            {/* {isPending && <LoadingOverlay /> } */}
            {isLoading && <LoadingOverlay /> }
            {!isLoading && 
                <div className="container">
                    {/* {console.log(questions)} */}    
                    {/* {console.log(score)} */}
                    {/* {console.log(questions[0].options[0]['1'].imgUrl)} */}
                    {/* {console.log(Object.values(list[1]))} */}
                    {/* {console.log(Object.values(list[0]).some(x => x === null || x === ''))} */}
                    {/* {console.log(questions[0].options)} */}

                    {/* {console.log(questions[0].answerOptions)} */}
                    {/* {console.log(questions[0].id)} */}
                    
                    {/* <div className="try"> */}
                        {/* <span>Who am I?</span> */}
                    {/* <Question2 question={questions[0]}/> */}

                    {players && currentQuestionIndex < 10 ? 
                        <Question 
                            players={players[currentQuestionIndex]} 
                            dispatch={dispatch}
                        /> 
                    : currentQuestionIndex === 10 ?
                        <Score />
                    :
                        <div className="empty"><h2>No players :/</h2></div>
                    } 

                        {/* <img src={`${questions[0].imgUrl}`} alt="" />
                        <div>
                            {questions[0].answerOptions.map((answerOption,i) => 
                                <button key={i}>{answerOption.answerText}</button>
                            )}
                        </div> */}
                    {/* </div> */}

                    {/* {questions ? questions.map(question => (
                    <Question question={question} key={question.id}/>
                    )) : <div className="empty"><h2>You have no workouts added :/</h2></div>} */}
                    
                </div>
            }
        </main>
        </>
    );
}
 
export default Quiz;