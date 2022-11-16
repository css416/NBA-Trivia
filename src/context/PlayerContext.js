import { createContext, useState, useReducer } from "react";

export const PlayersContext = createContext();

export const playersReducer = (state, action) => {

    switch(action.type) {
        case 'SET_PLAYERS':
            return {
                players: action.payload,
                currentQuestionIndex: 0,
                score: 0,
                setRestart: false,
            }
        case 'NEXT_QUESTION':
            // const lastQuestion = state.currentQuestionIndex === 10;
            const currentQuestionIndex = state.currentQuestionIndex === 10 ? state.currentQuestionIndex : state.currentQuestionIndex + 1
            return {
                ...state, currentQuestionIndex: currentQuestionIndex
            }
        case 'INCREMENT_SCORE':
            return {
                ...state, score: state.score + 1
            }
        case 'RESTART_QUIZ':
            return {
                ...state, setRestart: true
            }
        default:
            return state; 
    }
}

export const PlayersContextProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true)

    const [state, dispatch] = useReducer(playersReducer, {
        players: null,
        currentQuestionIndex: 0,
        score: 0,
        setRestart: false
    })  

    return (
        <PlayersContext.Provider value={{...state, dispatch, isLoading, setIsLoading}}>        
            { children }
        </PlayersContext.Provider>
    )
}