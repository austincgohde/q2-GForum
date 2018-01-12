import React, { Component } from 'react';
import Moment from 'react-moment';

import { votePost } from '../actions/posts';
import { addComment } from '../actions/comments'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Comment from './Comment';

class Post extends Component {

  state = {
    comment : {
      content: "",
      author: "",
      post_id: this.props.post.id
    },
    commentToggle: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.comment);
    this.props.addComment(this.state.comment);
    this.setState( {
      comment : {
        content: "",
        author: "",
        post_id: this.props.post.id
      }
    })
  }

  handleFormChanges = (e) => {
    if(e.target.id === "content") {
      this.setState({ comment : {...this.state.comment, content : e.target.value} })
    } else if(e.target.id === "author") {
      this.setState({ comment : {...this.state.comment, author: e.target.value } })
    }
  }

  handleVotes = (e) => {
    if(e.target.className.endsWith("up")) {
      this.props.votePost(this.state.comment.post_id, { votes: this.props.post.votes+1 })
    } else if(e.target.className.endsWith("down") && this.props.post.votes > 0) {
      this.props.votePost(this.state.comment.post_id, { votes: this.props.post.votes-1})
    }
  }

  handleToggle = () => {
    this.setState({ commentToggle : !this.state.commentToggle })
  }

  render () {

    let {
      id,
      author,
      title,
      content,
      created_at,
      image_url,
      votes
    } = this.props.post

    let comment = this.state.commentToggle ? this.props.comments.map((c) => {
      if(c.post_id === id) {
        return <Comment key={c.id} comment={c}/>
      }
    }) : null

    let commentCounter = this.props.comments.filter(c => c.post_id === id);

    let counterText = commentCounter.length !== 1 ? "Comments" : "Comment";

    return (
      <div className="row">
        <div className="col-md-12">

          <div className="well">
            <div className="media-left">
              <img className="media-object" src={`${image_url}`} alt="explanation"/>
            </div>
            <div className="media-body">
              <h4 className="media-heading">
                {title}
                <a><i
                  className="glyphicon glyphicon-arrow-up"
                  onClick={this.handleVotes}
                  ></i></a>
                <a><i
                  className="glyphicon glyphicon-arrow-down"
                  onClick={this.handleVotes}
                  ></i></a>
                {votes}
              </h4>
              <div className="text-right">
                {author}
              </div>
              <p>
                {content}
              </p>
              <div>
                <Moment fromNow>{created_at}</Moment>
                <i className="glyphicon glyphicon-comment"></i>
                <a
                  onClick={this.handleToggle}
                  >
                  {`${commentCounter.length} ${counterText}`}
                </a>
              </div>
              {comment}
              <form
                className="form-inline"
                onSubmit={this.handleSubmit}
                >
                <div className="form-group">
                  <input
                    id="content"
                    className="form-control"
                    placeholder="Comment here..."
                    value={this.state.comment.content}
                    onChange={this.handleFormChanges}
                    />
                    <input
                      id="author"
                      className="form-control"
                      placeholder="Author here..."
                      value={this.state.comment.author}
                      onChange={this.handleFormChanges}
                      />
                  </div>
                <div className="form-group">
                  <input type="submit" className="btn btn-primary"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(store, props) {
  return {
    comments: store.comments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addComment: bindActionCreators(addComment, dispatch),
    votePost: bindActionCreators(votePost, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
