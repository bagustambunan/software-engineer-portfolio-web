import { Link } from "react-router-dom";
import Avatar from "../../../components/Avatar";
import { profile } from "../../../constants/profile";
import Button from "../../components/Button";
import routes from "../../../constants/route";
import useWindowNavigate from "../../hooks/useWindowNavigate";

export default function HomePage() {
  const contactWindow = useWindowNavigate("contact");
  const experiencesWindow = useWindowNavigate("experiences");
  const projectsWindow = useWindowNavigate("projects");

  return (
    <div className="container">
      <Avatar />
      {profile.longDescription}
      <div className="horizontal-container">
        <Link to={routes.experiences}>
          <Button onClick={experiencesWindow.open}>💼 Experiences</Button>
        </Link>
        <Link to={routes.projects}>
          <Button onClick={projectsWindow.open}>📝 Projects</Button>
        </Link>
        <Link to={routes.contact}>
          <Button onClick={contactWindow.open}>💬 Contact Me</Button>
        </Link>
      </div>
    </div>
  );
}
