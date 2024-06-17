import { AppState } from "../AppState.js";
import { gamersService } from "../services/gamersService.js";


export class GamersController {
    constructor() {
        console.log("Gamers Controller Is Loaded")
        this.drawGamers()
    }


    increaseScore(gamerName) {
        console.log("Increasing Score From The Controller, and the gamer name is" + gamerName);
        gamersService.increaseScore(gamerName)
        this.drawGamers()
    }

    createNewGamer() {
        event.preventDefault()
        console.log("creating gamer");
        const form = event.target
        console.log("got the form", form);
        const nameFromForm = form.gamerName.value
        gamersService.createNewGamer(nameFromForm)
        this.drawGamers()
    }

    drawGamers() {
        const gameCardsElem = document.getElementById("gamerCards")
        let innerHTMLString = ' '
        const gamers = AppState.gamers
        gamers.forEach((gamer) => innerHTMLString += gamer.gamerCardHTMLTemplate)
        gameCardsElem.innerHTML = innerHTMLString
    }
}