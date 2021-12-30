import "./rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/posts/gift.png" alt="" />
          <span className="birthdayText">
            <b>Sophie Auster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="/assets/posts/ad.png" alt="" />
        <h4 className="rightbartitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgcontainer">
              <img className="rightbarProfileImg" src="/assets/person/3.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsename">Jane stark</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgcontainer">
              <img className="rightbarProfileImg" src="/assets/person/4.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsename">Jaimie stark</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
