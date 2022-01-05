import "./sidebar.css";
import { RssFeed, Comment, Group, Bookmarks, HelpOutline, Event, Today, PlayCircleOutline } from "@material-ui/icons";
import { Users } from "../../dummyData";
import MyTeam from "../myteam/MyTeam";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarlistItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Comment className="sidebarIcon" />
            <span className="sidebarlistItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarlistItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmarks className="sidebarIcon" />
            <span className="sidebarlistItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarlistItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarlistItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <Today className="sidebarIcon" />
            <span className="sidebarlistItemText">Today</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleOutline className="sidebarIcon" />
            <span className="sidebarlistItemText">Videos</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarColleagueList">
          {Users.map((u) => (
            <MyTeam key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
