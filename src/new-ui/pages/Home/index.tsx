import { Link } from "react-router-dom";
import Avatar from "../../../components/Avatar";
import { profile } from "../../../constants/profile";
import Button from "../../components/Button";
import Window from "../../components/Window";
import routes from "../../../constants/route";
import useWindowNavigate from "../../hooks/useWindowNavigate";

export default function HomePage() {
  const contactWindow = useWindowNavigate("contact");
  return (
    <Window
      windowKey="home"
      title={profile.name}
      closable={false}
      defaultOpen={true}
      customStyle={{ other: { fullWidth: true, fullHeight: true } }}
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
