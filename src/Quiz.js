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

    render() {

        const isQuizEnd = (this.state.quiz_position -1) === quizData.quiz_questions.length ? true : false;

        let result;
        // const result = isQuizEnd ? (
        //     <QuizEnd />
        // ) : (
        //     <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />
        // );

        if (isQuizEnd) {
            result = (<QuizEnd/>);
        } else {
            result = (<QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />);
        }

        return (
            <div>
                {result}
            </div>
        );
    }
}

export default Quiz; 