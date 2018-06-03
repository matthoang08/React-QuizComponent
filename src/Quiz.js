import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion.js';
import QuizEnd from './QuizEnd';

let quizData = require('./quiz_data.json');

class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quiz_position: 1
        }
    }

    showNextQuestion() {
        this.setState({
            quiz_position: this.state.quiz_position + 1
        });
    }

    render() {

        const isQuizEnd = (this.state.quiz_position -1) === quizData.quiz_questions.length ? true : false;

        let result;

        if (isQuizEnd) {
            result = (<QuizEnd/>);
        } else {
            result = (
                <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} 
                    showNextQuestionHandler={this.showNextQuestion.bind(this)}
                />
            );
        }

        return (
            <div>
                {result}
            </div>
        );
    }
}

export default Quiz; 