import React from 'react';
import { connect } from 'react-redux';

import {getData} from '../api/comments';
import CommentList from '../views/comment-list';
import store from '../store';
import {LOAD_DATA_SUCCESS} from '../actions';

class CommentListContainer extends React.Component {

  componentDidMount() {
    var data = getData();
    store.dispatch({
      type: LOAD_DATA_SUCCESS,
      data: data
    });
  }

  handleClick(commentId,className) {
    switch(className) {
    case 'reply':
      console.log('comment id='+commentId+' button='+className+' was clicked');
      break;
    case 'replies':
      console.log('comment id='+commentId+' button='+className+' was clicked');
      break;
    case 'up_votes':
      console.log('comment id='+commentId+' button='+className+' was clicked');
      break;
    case 'down_votes':
      console.log('comment id='+commentId+' button='+className+' was clicked');
    // no default
    }
  }

  render() {
    return (
      <CommentList data={this.props.data} handleClick={this.handleClick} />
    );
  }
}

const mapStateToProps = function(store) {
  return {
    data: store.data
  };
}

export default connect(mapStateToProps)(CommentListContainer);
