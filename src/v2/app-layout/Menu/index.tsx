import routes from "../../../shared/constants/route";
import FolderWrapper from "../../components/FolderWrapper";
import useWindowNavigate from "../../hooks/useWindowNavigate";

export default function Menu() {
  const contactWindow = useWindowNavigate(routes.contact);
  const experiencesWindow = useWindowNavigate(routes.experiences);
  const projectsWindow = useWindowNavigate(routes.projects);
  const achievementsWindow = useWindowNavigate(routes.achievements);
  return (
    <FolderWrapper
      folders={[
        {
          href: routes.experiences,
          onOpen: experiencesWindow.open,
          children: "Experiences",
        },
        {
          href: routes.projects,
          onOpen: projectsWindow.open,
          children: "Projects",
        },
        {
          href: routes.achievements,
          onOpen: achievementsWindow.open,
          children: "Achievements",
        },
        {
          href: routes.contact,
          onOpen: contactWindow.open,
          children: "Contact and Links",
        },
      ]}
    />
  );
}
