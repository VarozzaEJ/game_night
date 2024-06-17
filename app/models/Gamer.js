export class Gamer {
    name = ''
    score = 0

    constructor(gamerName) {
        this.name = gamerName
    }

    get gamerCardHTMLTemplate() {
        return `
        <div class="col-12  d-flex justify-content-center  py-3">
        <p class="fs-3 fw-bold pe-2 mb-0">${this.name}</p>
        <p class="fs-3 fw-bold pe-2 mb-0">${this.score}</p>
        <button onclick="app.GamersController.increaseScore('${this.name}')" class="mdi mdi-plus btn btn-dark"></button>
        </div>
        `
    }
}