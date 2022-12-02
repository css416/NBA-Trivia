import { Shuffle } from '../utils/Shuffle';

const fetchPlayers = async ({ dispatch, setIsLoading }) => {
    
    try {
        const response = await fetch('https://nba-trivia-app-server.onrender.com/2022/players.json',{ method: "GET", mode: 'cors'})
        const json = await response.json()

        if (response.ok && json.league.standard.length > 0 ) {
            dispatch({type: 'SET_PLAYERS', payload: Shuffle(json.league.standard)})
            setIsLoading(false);
        } 
        if ( json.length === 0) {
            return setIsLoading(false);
        }
    } catch (e) {
        console.error(e);
    }
  }
  
export default fetchPlayers;
  