import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="assets/posts/work.png" alt="" />
              <img className="profileUserImg" src="assets/person/1.jpeg" alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Damien Lanister</h4>
              <span className="profileInfoDescription">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem porro minima dicta eos ab,
                architecto sit esse unde officia voluptatum aliquid rem. Quam corrupti ab similique incidunt? Enim,
                facere praesentium? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem porro minima
                dicta eos ab, architecto sit esse unde officia voluptatum aliquid rem. Quam corrupti ab similique
                incidunt? Enim, facere praesentium?
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
