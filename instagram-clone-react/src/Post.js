import React from 'react'
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Jason"
          src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>
        {/* header -> avatar+ username */}
      </div>
      

      <img
        className="post__image"
        src="https://www.google.com/logos/doodles/2020/remembering-sudan-the-last-male-northern-white-rhino-6753651837108653-l.png"
      />
      {/* image */}

      <h4 className="post__text"><strong>jasonKang: </strong>feeling good</h4>
      {/* username + caption */}
    </div>
  )
}

export default Post
