import { appState } from "../AppState.js";
import { Trivia } from "../Models/Trivia.js";

class TriviasService {
    async getTrivia() {
        const res = await axios.get('https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple')
        console.log('data', res.data);
        appState.trivias = res.data.results.map(cd => new Trivia(cd))

    }

    // async getTrivias() {
    //     const response = await fetch('https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple')
    //     console.log('get trivias res', response);
    //     const data = await response.json()
    //     console.log('the data', data);


    // const response = await axios.get('https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple')
    // console.log('trivia data', response.data);
    //     // appState.cards = response.data.map(triviaData => new (triviaData))
    // }

}






export const triviasService = new TriviasService()