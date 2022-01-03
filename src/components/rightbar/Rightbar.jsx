import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/posts/gift.png" alt="" />
          <span className="birthdayText">
            <b>Sophie Auster</b> and <b>3 other colleagues</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="/assets/posts/ad.png" alt="" />
        <h4 className="rightbarTitle">Online colleagues</h4>
        <ul className="rightbarColleagueList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Nantes</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Workstation:</span>
            <span className="rightbarInfoValue">Developpeur à Nantes</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Languages:</span>
            <span className="rightbarInfoValue">Javascript, React</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Colleagues</h4>
        <div className="rightbarColleagues">
          <div className="rightbarColleague">
            <img className="rightbarColleagueImg" src="assets/person/2.jpeg" alt="" />
            <span className="rightbarColleagueName">Jean castex</span>
          </div>
          <div className="rightbarColleague">
            <img className="rightbarColleagueImg" src="assets/person/3.jpeg" alt="" />
            <span className="rightbarColleagueName">Jane stark</span>
          </div>
          <div className="rightbarColleague">
            <img className="rightbarColleagueImg" src="assets/person/4.jpeg" alt="" />
            <span className="rightbarColleagueName">Jamie Stark</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightbar />
      </div>
    </div>
  );
}
