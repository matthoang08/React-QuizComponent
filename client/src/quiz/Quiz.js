import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion.js';
import QuizEnd from './QuizEnd';
import axios from 'axios';

let quizData = require('./quiz_data.json');

class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quiz_position: 1
        }
    }

    async componentDidMount() {

        try {
            const res = await axios.get('/api/title');
            this.setState({
                title: res.data.title
            });
        } catch (err) {
            console.log(err);
        }
    }

    handleResetClick() {
        this.setState({
            quiz_position: 1
        });
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
            result = (<QuizEnd
                    resetClickHandler={this.handleResetClick.bind(this)}
                />);
        } else {
            result = (
                <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} 
                    showNextQuestionHandler={this.showNextQuestion.bind(this)}
                />
            );
        }

        return (
            <div>
                <h4>{this.state.title}</h4>
                <div>
                    {result}
                </div>
            </div>
        );
    }
}

export default Quiz; 