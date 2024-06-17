import { AppState } from "../AppState.js";
import { Gamer } from "../models/Gamer.js";

class GamersService {
    increaseScore(gamerName) {
        console.log("Increasing Score from the service");
        const gamers = AppState.gamers
        const foundGamer = gamers.find((gamer) => gamer.name == gamerName)
        foundGamer.score++
        console.log(`${foundGamer.name}'s score is now ${foundGamer.score}`);
    }
    createNewGamer(gamerName) {
        const gamer = new Gamer(gamerName)
        const gamers = AppState.gamers
        gamers.push(gamer)
    }
}

export const gamersService = new GamersService()