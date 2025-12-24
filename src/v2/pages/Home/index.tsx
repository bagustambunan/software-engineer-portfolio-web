import { Link } from "react-router-dom";
import { profile } from "../../../shared/constants/profile";
import routes from "../../../shared/constants/route";
import useWindowNavigate from "../../hooks/useWindowNavigate";
import Avatar from "../../../shared/components/Avatar";
import Folder from "../../components/Folder";

export default function HomePage() {
  const contactWindow = useWindowNavigate(routes.contact);
  const experiencesWindow = useWindowNavigate(routes.experiences);
  const projectsWindow = useWindowNavigate(routes.projects);
  const achievementsWindow = useWindowNavigate(routes.achievements);

  return (
    <div className="container">
      <Avatar />
      {profile.longDescription}
      <div className="horizontal-container">
        <Link to={routes.experiences}>
          <Folder onOpen={experiencesWindow.open}>💼 Experiences</Folder>
        </Link>
        <Link to={routes.projects}>
          <Folder onOpen={projectsWindow.open}>📝 Projects</Folder>
        </Link>
        <Link to={routes.achievements}>
          <Folder onOpen={achievementsWindow.open}>🏆 Achievements</Folder>
        </Link>
        <Link to={routes.contact}>
          <Folder onOpen={contactWindow.open}>💬 Contact Me</Folder>
        </Link>
      </div>
    </div>
  );
}
