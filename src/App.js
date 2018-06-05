import React, { Component } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Categories from "./components/Categories"
import Brochure from "./components/Brochure"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Brochure />
        <Footer />
      </div>
    )
  }
}

export default App
