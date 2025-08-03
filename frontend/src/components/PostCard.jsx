// import React from 'react';
// import { Link } from 'react-router-dom';
// import TimeAgo from 'react-timeago';

// const PostCard = ({ post }) => {
//   return (
//     <div className="post-card">
//       <div className="post-header">
//         <Link to={`/profile/${post.user._id}`} className="post-author">
//           {post.user.name}
//         </Link>
//         <span className="post-timestamp">
//           <TimeAgo date={post.createdAt} />
//         </span>
//       </div>
//       <p className="post-text">{post.text}</p>
//     </div>
//   );
// };

// export default PostCard;














import React from 'react';
import { Link } from 'react-router-dom'; // <-- Add this import

const PostCard = ({ post }) => {
  return (
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title">
          <Link to={`/profile/${post.user._id}`}>{post.user.name}</Link> {/* <-- Change this line */}
        </h5>
        <p className="card-text">{post.content}</p>
        <p className="card-subtitle mb-2 text-muted">
          Posted on {new Date(post.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default PostCard;