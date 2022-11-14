export class Trivia {
    constructor(data) {
        this.difficulty = data.difficulty
        this.type = data.type
        this.question = data.question
        this.category = data.category
        this.correct_answer = data.correct_answer
        this.incorrect_answers = data.incorrect_answers
    }

    get TriviaTemplate() {
        return `
        <div class="col-3">
        <div class="bg-light elevation-2 rounded text-center p-3">
          <h1>${this.category}</h1>
          <h2 class="text-primary">${this.difficulty}</h2>
          <h4>${this.question}</h4>
          <h5>${this.correct_answer}</h5>
          <h6>${this.incorrect_answers}</h6>
        </div>
      </div>
    
    `
    }


}