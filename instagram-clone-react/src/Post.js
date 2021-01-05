import React from 'react'
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ postId, username, caption, imageUrl }) {
  const [comments, setComments] = useState([]);
   
  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()))
        });
    }

    return () => {
      unsubscribe();
    };
  }, [postId]);
  
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Jason"
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
        {/* header -> avatar+ username */}
      </div>
      

      <img
        className="post__image"
        src={imageUrl}
      />
      {/* image */}

      <h4 className="post__text"><strong>{username}</strong> {caption}</h4>
      {/* username + caption */}
    </div>
  )
}

export default Post
