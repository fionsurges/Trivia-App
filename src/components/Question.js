import React, { Component } from "react"
import styled from "styled-components"
import Answer from './Answer'



class Question extends Component {

    constructor(props) {
        super(props)
        this.state = {
            answerOn: false,
        }
    }

    questionClick = (event) => {
        event.preventDefault()

        this.setState({
            answerOn: !this.state.answerOn
        })
    }

    render() {
        return (
            <questionDiv>
                <div className="questions">
                    {this.props.questionOn ? (
                        <React.Fragment>
                            {this.props.currentQuestion.map(question => <p onClick={this.questionClick}>{question.question}</p>)}
                        </React.Fragment>
                    ) : (null)
                    }
                </div>
                <Answer answerOn={this.state.answerOn} currentQuestion={this.props.currentQuestion} />
            </questionDiv>
        )
    }
}

export default Question

const questionDiv = styled.div`
.questions {
    background-color: #3f3f3f;
    border-radius: 5px;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
}`