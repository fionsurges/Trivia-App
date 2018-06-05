import React, { Component } from "react"
import styled from "styled-components"
import Questions from "./Questions"

class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  logClick = (event) => {
    const categoryId = event.target.id
    fetch(`https://galvanize-cors.herokuapp.com/http://jservice.io/api/clues?category=${categoryId}`)
      .then(response => response.json())
      .then(clues => {

        this.setState({
          data: clues,
          currentQuestion: clues[0]
        })
      })
  }

  render() {

    return (
      <StyledDiv>
        <div className="trivia">
          <div className="categories">
            <h2>Pick a Category!</h2>
            <div className="dropdown">
              <button className="dropbtn">Categories</button>
              <div className="dropdown-content">
                {this.props.data.map(trivia => <a id={trivia.id} onClick={this.logClick}>{trivia.title}</a>)}
              </div>
            </div>
          </div>
          <div className="questions">
            <h2>Questions</h2>
            <Questions questions={this.state.data} />
          </div>
        </div>
      </StyledDiv>
    );
  }
}

export default Categories;

const StyledDiv = styled.div`

  .dropbtn {
    background-color: #999999;
    border: black;
    border-radius: 5px;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: black;
    cursor: pointer;
  }

  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    position: relative;
    display: inline-block;
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #999999;
    border: black;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {
    background-color: #999999;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }

  /* Change the background color of the dropdown button when the dropdown content is shown */
  .dropdown:hover .dropbtn {
    background-color: #999999;
  }
`
