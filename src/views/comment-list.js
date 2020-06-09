import React from 'react';

const CommentList = (props) => {
  var comments = props.data;

  function onMouseEnter(evt) {
    evt.target.style.backgroundColor = "#808080";
    evt.target.style.color = "#ffffff";
  }
  function onMouseLeave(evt) {
    evt.target.style.backgroundColor = "#ffffff";
    evt.target.style.color = "#808080";
  }
  function handleClick(commentId,className) {
    props.handleClick(commentId,className);
  }
  function onCommentEnter(evt) {
    console.log('entering '+evt.target.className);
    var el = evt.target;
    var footer = null;
    switch(el.className) {
    case 'comment':
      footer = el.querySelector('.footer');
      break;
    case 'header':
    case 'body':
      footer = el.parentNode.querySelector('.footer');
      break;
    case 'footer':
      footer = el;
      break;
    case 'reply':
    case 'replies':
    case 'up_votes':
    case 'down_votes':
      footer = el.parentNode;
      break;
    default:
      console.log(evt.target);
      break;
    }
    if (footer) {
      footer.querySelector('.reply').style.color = "#000000";
      footer.querySelector('.replies').style.color = "#000000";
      footer.querySelector('.up_votes').style.color = "#000000";
      footer.querySelector('.down_votes').style.color = "#000000";
    }
  }
  function onCommentLeave(evt) {
    console.log('leaving '+evt.target.className);
    var el = evt.target;
    var footer = null;
    switch(el.className) {
    case 'comment':
      footer = el.querySelector('.footer');
      break;
    case 'header':
    case 'body':
      footer = el.parentNode.querySelector('.footer');
      break;
    case 'footer':
      footer = el;
      break;
    case 'reply':
    case 'replies':
    case 'up_votes':
    case 'down_votes':
      footer = el.parentNode;
      break;
    default:
      console.log(evt.target);
      break;
    }
    if (footer) {
      footer.querySelector('.reply').style.color = "#d0d0d0";
      footer.querySelector('.replies').style.color = "#d0d0d0";
      footer.querySelector('.up_votes').style.color = "#d0d0d0";
      footer.querySelector('.down_votes').style.color = "#d0d0d0";
    }
  }

  return (
    <div id="commentList">

      {comments.map((comment) => 
        <div className='comment' key={comment.id} 
          onMouseEnter={(evt) => onCommentEnter(evt)} 
          onMouseLeave={(evt) => onCommentLeave(evt)} >
          <div className='leftPanel' >
            <img className="photo" src={"/images/" + comment.photo} alt="" />
          </div>
          <div className='rightPanel' >

            <div className='header' >
              <span className='name' >
                {comment.name}
              </span>
              &nbsp;
              <span className='type' >
                {comment.type}
              </span>
              &nbsp;
              <span className='timestamp' >
                &ndash;&nbsp;{comment.timestamp}
              </span>
            </div>

            <div className='body' >
              {comment.body}
            </div>

            <div className='footer' >
              <div className='reply' onClick={(evt) => handleClick(comment.id,evt.target.className)}
                onMouseEnter={(evt) => onMouseEnter(evt)} 
                onMouseLeave={(evt) => onMouseLeave(evt)} >
                REPLY
              </div>
              <div className='replies' onClick={(evt) => handleClick(comment.id,evt.target.className)}
                onMouseEnter={(evt) => onMouseEnter(evt)} 
                onMouseLeave={(evt) => onMouseLeave(evt)} >
                {comment.reply_no} REPLIES
              </div>
              <div className='up_votes' onClick={(evt) => handleClick(comment.id,evt.target.className)}
                onMouseEnter={(evt) => onMouseEnter(evt)} 
                onMouseLeave={(evt) => onMouseLeave(evt)} >
                <img src="/images/up-vector.png" alt="" />
                {comment.up_votes}
              </div>
              <div className='down_votes' onClick={(evt) => handleClick(comment.id,evt.target.className)}
                onMouseEnter={(evt) => onMouseEnter(evt)} 
                onMouseLeave={(evt) => onMouseLeave(evt)} >
                <img src="/images/down-vector.png" alt="" />
                {comment.down_votes}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default CommentList;