import { Link } from "react-router-dom";
import Avatar from "../../../components/Avatar";
import { profile } from "../../../constants/profile";
import Button from "../../components/Button";
import routes from "../../../constants/route";
import useWindowNavigate from "../../hooks/useWindowNavigate";
import { useEffect } from "react";

export default function HomePage() {
  const contactWindow = useWindowNavigate("contact");
  const fizzBuzzWindow = useWindowNavigate("fizzBuzz");

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
        <Button onClick={contactWindow.open}>Contact Me</Button>
      </Link>
      <Link to={routes.fizzBuzz}>
        <Button onClick={fizzBuzzWindow.open}>FizzBuzz</Button>
      </Link>
    </div>
  );
}
