import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import CommentCard from './CommentCard';
import ObjectDetails from './ObjectDetails';
import ObjectComments from './ObjectComments';
import ObjectQuiz from './ObjectQuiz';



export default class ObjectPage extends React.Component {

  state = {
    comments: [],
    newComment: "",
    quiz: false
  }

  watchfulComment = (event) => {
    console.log(event.target.value)
    this.setState({
      newComment: event.target.value
    })
  }

  submitComment = (event) => {
    event.preventDefault();
    console.log("submitComment")
    this.setState({
      comments: [...this.state.comments, this.state.newComment],
      newComment: ""
    })
  }

  startQuiz = (event) => {
    console.log("quizzzin")
    this.setState({
      quiz: !this.state.quiz
    })
  }

  render () {
    console.log("obj page", this.props)
    {
      if (this.state.quiz){
        return (
          <ObjectQuiz currentBody={this.props.currentBody}/>
        )
      } else {
        return (
          <div>

                <ObjectDetails
                  currentBody={this.props.currentBody}
                  startQuiz={this.startQuiz}/>
                <ObjectComments
                  comments={this.state.comments}
                  newComment={this.state.newComment}
                  watchfulComment={this.watchfulComment}
                  submitComment={this.submitComment}/>


          </div>

        );
      }
    }

  }
}
