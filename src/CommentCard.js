import React from 'react';

export default function CommentCard (props) {
  console.log(props)
  return(
    <div class="ui cards">
      <div class="ui card">
        <div class="content">
          <div class="description">
          {props.comment}
            </div>
          </div>
        </div>
      </div>
  )
}
