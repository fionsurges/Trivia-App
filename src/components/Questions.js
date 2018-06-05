import React, { Component } from 'react'
import styled from "styled-components"

import Categories from './Categories'
import Question from './Question'

class Questions extends Component {

    constructor(props) {
        super(props)
        this.state = {
            questionOn: false,
            currentQuestion: []
        }
    }

    valueClick = (event) => {
        event.preventDefault()
        console.log(event.target.id)

        const currentQuestion = this.props.questions.filter(question => question.id == event.target.id)
        console.log(currentQuestion)

        this.setState({
            questionOn: !this.state.questionOn,
            currentQuestion: currentQuestion
        })

        console.log("state: ", this.state)
    }



    render(props) {
        console.log("questions props: ", this.props)

        return (

            <div>
                <ValueDiv>
                    <div className="values hidden">
                        {this.props.questions.map(value => {
                            return (
                                <React.Fragment>
                                    <div id={value.id} className="value" onClick={this.valueClick}>
                                        <h3 onClick={this.valueClick}>{value.value}</h3>
                                    </div>
                                </React.Fragment>
                            )
                        })
                        }
                    </div>
                </ValueDiv>
                <Question currentQuestion={this.state.currentQuestion} questionOn={this.state.questionOn} />

            </div>

        )
    }
}

export default Questions;

const ValueDiv = styled.div`

.value {
    background-color: #999999;
    display: inline-grid;
    grid-template-columns: 10% 10% 10% 10% 10%;
    grid-column-gap: 40px;
    grid-row-gap: 40px;
    border-radius: 5px;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
}

`