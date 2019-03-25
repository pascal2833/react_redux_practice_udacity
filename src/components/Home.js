import React, { Component } from 'react'
import Login from './Login'
import Question from './Question'
import connect from "react-redux/es/connect/connect"

class Home extends Component {
    state = {
        showUnansweredQuestions: true
    }

    chooseAnsweredQuestions = () => {
        this.setState(previousState => (
            {showUnansweredQuestions: false}
            )
        )
    }
    chooseUnAnsweredQuestions = () => {
        this.setState(previousState => (
                {showUnansweredQuestions: true}
            )
        )
    }
    render () {
        return (
                <div className="home-cp">
                {this.props.userChoosed
                    ? <div>
                        <div className='home-cp__questions-type'>
                            <button onClick={this.chooseUnAnsweredQuestions}>Unanswered question</button>
                            <button onClick={this.chooseAnsweredQuestions}>Answered question</button>
                        </div>
                        <div className='home-cp__questions-list'>
                            {this.state.showUnansweredQuestions === true
                                ? <div>
                                    { this.props.unansweredQuestions.map(question => (
                                        <div key={question.idQuestion}>
                                            <Question
                                                authorId={question.author}
                                                text={question.textQuestion}
                                            >
                                            </Question>
                                        </div>
                                        )
                                    )
                                    }
                                </div>
                                : <div>
                                    Ans
                                </div>
                            }
                        </div>
                    </div>
                    : <Login/>
                }
            </div>
        )
    }
}

const getUnansweredQuestions = (questions) => { // TODO: refactor these 2 functions.
    if (questions) {
        return Object.keys(questions).reduce((acc, question) => {
            let optionOneUnanswered = {}
            if (questions[question].optionOne.votes.length === 0) {
                optionOneUnanswered.idQuestion = questions[question].id
                optionOneUnanswered.textQuestion = questions[question].optionOne.text
                optionOneUnanswered.timestamp = questions[question].timestamp
                optionOneUnanswered.author = questions[question].author
                acc.push(optionOneUnanswered)
            } else if (questions[question].optionTwo.votes.length === 0) {
                optionOneUnanswered.idQuestion = questions[question].id
                optionOneUnanswered.textQuestion = questions[question].optionTwo.text
                optionOneUnanswered.timestamp = questions[question].timestamp
                optionOneUnanswered.author = questions[question].author
                acc.push(optionOneUnanswered)
            }
            return acc
        }, [])
    }
}
const getAnsweredQuestions = (questions) => {
    if (questions) {
        return Object.keys(questions).reduce((acc, question) => {
            let optionOneAnswered = {}
            if (questions[question].optionOne.votes.length !== 0) {
                optionOneAnswered.idQuestion = questions[question].id
                optionOneAnswered.textQuestion = questions[question].optionOne.text
                optionOneAnswered.timestamp = questions[question].timestamp
                optionOneAnswered.author = questions[question].author
                acc.push(optionOneAnswered)
            } else if (questions[question].optionTwo.votes.length !== 0) {
                optionOneAnswered.idQuestion = questions[question].id
                optionOneAnswered.textQuestion = questions[question].optionTwo.text
                optionOneAnswered.timestamp = questions[question].timestamp
                optionOneAnswered.author = questions[question].author
                acc.push(optionOneAnswered)
            }
            return acc
        }, [])
    }
}

function mapStateToProps ({ users, questions }) {
    if (questions) {
        return {
            userChoosed: users.userChoosed,
            unansweredQuestions: getUnansweredQuestions(questions).sort((a,b) => b.timestamp - a.timestamp),
            answeredQuestions: getAnsweredQuestions(questions).sort((a,b) => b.timestamp - a.timestamp)
        }
    } else return {}
}
export default connect(mapStateToProps)(Home)