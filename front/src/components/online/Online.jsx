import "./online.css";

export default function Online({ user }) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgcontainer">
        <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsename">{user.username}</span>
    </li>
  );
}
