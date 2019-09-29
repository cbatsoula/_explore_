import React from 'react';

export default class ObjectQuiz extends React.Component {
  state = {
    count: 0,
    name: {
      question: "What is the name?",
      answer: this.props.currentBody.englishName,
      answerInput: "",
    },
    planet: {
      question: "Is this a planet?",
      answer: this.props.currentBody.isPlanet.toString(),
      answerInput: "",
    },
    gravity: {
      question: "What is the surface gravity in m.s-2?",
      answer: this.props.currentBody.gravity.toString(),
      answerInput: "",
    }
  }

  answerChange = (event) => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: {...this.state[event.target.name], answerInput: event.target.value},
    })
  }

  answerSubmit = (event) => {
    event.preventDefault();
    console.log("submittin", event.target.name)
    if (this.state.name.answer === this.state.name.answerInput) {
      console.log("correct!", event.target.name)
    } else if (this.state.planet.answer === this.state.planet.answerInput) {
      console.log("correct!!")
    } else if (this.state.gravity.answer === this.state.gravity.answerInput) {
      console.log("correct!!!")
    } else {
      return null
    }
    //everytime this function is called, it checked if the names match and if true then doesnt bother to go down the rest--what would be better?
    // this.setState({
    //   name: {...this.state.name, answerInput: event.target.value},
    //
    // })
    // if this answer === this.state.something.answer then
    //   count ++ ~~~componentDidUpdate use???
    // else
    //   null
  }
  render () {
    console.log("obj quiz", this.state)
    return (
      <div className="quizContainer">
        <form onSubmit={this.answerSubmit}>
          <p>1. {this.state.name.question}
            <input
            onChange={this.answerChange}
            name="name"
            value={this.state.name.answerInput}
            type="text"
            placeholder="please type your answer here"/>
          {this.state.name.answer}</p>

          <p>2. {this.state.planet.question}
            <input
            onChange={this.answerChange}
            name="planet"
            value={this.state.planet.answerInput}
            type="text"
            placeholder="true or false"/>
          {this.state.planet.answer}</p>

          <p>3. {this.state.gravity.question}
            <input
            onChange={this.answerChange}
            name="gravity"
            value={this.state.gravity.answerInput}
            type="text"
            placeholder="please type your answer here"/>
          {this.state.gravity.answer}</p>
          <input type="submit" value="Submit" />
        </form>
      </div>

    );
  }
}
