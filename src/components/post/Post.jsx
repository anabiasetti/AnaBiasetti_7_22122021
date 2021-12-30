import "./post.css";
import { MoreVert } from "@material-ui/icons";
export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfilePicture" src="/assets/person/2.jpeg" alt="" />
            <span className="postUserName">Jean Castex</span>
            <span className="postDate">5 minutes ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! It's my first post :)</span>
          <img className="postImg" src="assets/posts/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/icons/like.png" alt="" />
            <img className="heartIcon" src="assets/icons/heart.png" alt="" />
            <span className="postlikeCounter">40 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
