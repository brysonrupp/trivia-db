import { appState } from "../AppState.js"
import { triviasService } from "../Services/TriviasService.js"
import { setHTML } from "../Utils/Writer.js"


function _drawTrivias() {
    let trivias = appState.trivias
    let template = ''
    trivias.forEach(t => template += t.TriviaTemplate)
    setHTML('trivias', template)
}

export class TriviasController {
    constructor() {
        console.log('trivia controller loaded');
        this.getTrivias()
        appState.on('trivias', _drawTrivias)
    }
    async getTrivias() {
        await triviasService.getTrivia()
        console.log('got the trivia');
    }
}