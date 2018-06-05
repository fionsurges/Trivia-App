import React, { Component } from "react"

class Answer extends Component {

    render() {
        return (
            <div>
                {this.props.answerOn ? (
                    <React.Fragment>
                        {this.props.currentQuestion.map(question => <p dangerouslySetInnerHTML={{ __html: question.answer }}></p>)}
                    </React.Fragment>
                ) : (null)}
            </div>
        )
    }
}

export default Answer