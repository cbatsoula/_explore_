import React from 'react';
import { Button } from 'semantic-ui-react';
import CommentCard from './CommentCard';

export default class ObjectComments extends React.Component {

  render () {
    console.log("obj comments", this.props)
    return (
      <>
      <div className="ObjectCommentContainer">

        <textarea
          onChange={this.props.watchfulComment} rows="6" cols="100" value={this.props.newComment}
          placeholder="Enter a comment here!" />
        <Button
          onClick={this.props.submitComment}
          className="ui violet button"
          type="submit">Submit
          </Button>
      </div>

          <div class="ui cards">
          { this.props.comments
            ?
            this.props.comments.map( comment => {
            return <CommentCard comment={comment}/>
          })
            :
            null
          }
          </div>
          </>

    );
  }
}
