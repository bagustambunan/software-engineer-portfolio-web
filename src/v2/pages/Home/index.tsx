import { profile } from "../../../shared/constants/profile";
import routes from "../../../shared/constants/route";
import useWindowNavigate from "../../hooks/useWindowNavigate";
import Avatar from "../../../shared/components/Avatar";
import FolderWrapper from "../../components/FolderWrapper";

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
        <FolderWrapper
          folders={[
            {
              href: routes.experiences,
              onOpen: experiencesWindow.open,
              children: "💼 Experiences",
            },
            {
              href: routes.projects,
              onOpen: projectsWindow.open,
              children: "📝 Projects",
            },
            {
              href: routes.achievements,
              onOpen: achievementsWindow.open,
              children: "🏆 Achievements",
            },
            {
              href: routes.contact,
              onOpen: contactWindow.open,
              children: "💬 Contact Me",
            },
          ]}
        />
      </div>
    </div>
  );
}
