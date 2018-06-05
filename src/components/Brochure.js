import React, { Component } from 'react'
import Categories from "./Categories"


class Brochure extends Component {
    constructor(props) {
        super(props)
        this.state = {
            brochurePageLoaded: false
        }
    }

    componentDidMount() {
        this.getCategories()
    }

    getCategories = () => {
        fetch("https://galvanize-cors.herokuapp.com/http://jservice.io/api/categories?count=10&offset=200")
            .then(response => response.json())
            .then(data => {
                console.log("data: ", data)
                this.setState({ data: data })
            })
    }

    brochureClick = (event) => {
        this.setState({
            brochurePageLoaded: !this.state.brochurePageLoaded
        })
    }



    render() {
        return (
            <React.Fragment>
                <div className ="brochure"
                    style={{display: this.state.brochurePageLoaded ? ("none"): ("flex")}}>
                    <h4>Do you think you're a trivia nut?</h4>
                    <p>Test your skills here!</p>
                    <p>Choose from a category and test your knowledge by clicking on the value of a question you would like to attempt. To reveal the answer, click on the question again!</p>
                    <button className="start-game" onClick={this.brochureClick}>Start Now!</button>
                </div>
                    {this.state.brochurePageLoaded ?
                        <main>
                            <Categories data={this.state.data} />
                        </main> : (null)
                    }
            </React.Fragment>
        )
    }
}


export default Brochure

