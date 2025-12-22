import { Link } from "react-router-dom";
import Avatar from "../../../components/Avatar";
import { profile } from "../../../constants/profile";
import Button from "../../components/Button";
import routes from "../../../constants/route";
import useWindowNavigate from "../../hooks/useWindowNavigate";
import { useEffect } from "react";

export default function HomePage() {
  const contactWindow = useWindowNavigate("contact");

  useEffect(() => {
    console.log("HomePage mounted");
    return () => {
      console.log("HomePage unmounted");
    };
  }, []);

  return (
    <div className="container">
      <Avatar />
      {profile.longDescription}
      <Link to={routes.contact}>
        <Button onClick={contactWindow.handleOpen}>Contact Me</Button>
      </Link>
    </div>
  );
}
