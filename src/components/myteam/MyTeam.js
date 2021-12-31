import "./myteam.css";

export default function MyTeam({ user }) {
  return (
    <li className="sidebarColleague">
      <img className="sidebarColleaguePicture" src={user.profilePicture} alt="photocolleague" />
      <span className="sidebarColleagueName">{user.username}</span>
    </li>
  );
}
