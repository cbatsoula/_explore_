import React from 'react';
import CommentCard from './CommentCard';

export default class ObjectPage extends React.Component {

  render () {
    console.log("obj comments", this.props)
    return (
      <div>

        <textarea
          onChange={this.props.watchfulComment} rows="6" cols="100" value={this.props.newComment}
          placeholder="Enter a comment here!" />
        <button
          onClick={this.props.submitComment}
          className="ui violet button"
          type="submit">Submit</button>

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
      </div>

    );
  }
}
