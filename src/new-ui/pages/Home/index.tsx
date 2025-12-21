import { Link } from "react-router-dom";
import Avatar from "../../../components/Avatar";
import { profile } from "../../../constants/profile";
import Button from "../../components/Button";
import Window from "../../components/Window";
import routes from "../../../constants/route";
import useWindowNavigate from "../../hooks/useWindowNavigate";
import useWindowPage from "../../hooks/useWindowPage";

export default function HomePage() {
  const { opened, isThisPage } = useWindowPage("home", routes.home);
  const contactWindow = useWindowNavigate("contact");

  if (!opened) return null;
  return (
    <Window
      windowKey="home"
      title={profile.name}
      closable={!isThisPage}
      defaultOpen={isThisPage}
      customStyle={isThisPage ? { other: { fullWidth: true, fullHeight: true } } : undefined}
    >
      <div className="container">
        <Avatar />
        {profile.longDescription}
        <Link to={routes.contact}>
          <Button onClick={contactWindow.handleOpen}>Contact Me</Button>
        </Link>
      </div>
    </Window>
  );
}
