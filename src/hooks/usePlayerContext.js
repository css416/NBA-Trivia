import { useContext } from "react";
import { PlayersContext } from "../context/PlayerContext";

export const usePlayerContext = () => {
    const context = useContext(PlayersContext)

    if (!context) {
        throw Error('usePlayersContext must be used inside usePlayersContextProvider')
    }

    return context;
}