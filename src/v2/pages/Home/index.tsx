import { profile } from "../../../shared/constants/profile";
import Avatar from "../../../shared/components/Avatar";
import Button from "../../../shared/components/Button";
import { Link } from "react-router-dom";
import { links } from "../../../shared/constants/link";
import routes from "../../../shared/constants/route";

export default function HomePage() {
  return (
    <div className="container">
      <Avatar />
      {profile.longDescription}
      <div className="horizontal-container">
        <Link
          to={links.find((link) => link.name === "LinkedIn")?.link ?? ""}
          target="_blank"
        >
          <Button type="primary">💼 Connect with me on LinkedIn</Button>
        </Link>
        <Link
          to={`mailto:${links.find((link) => link.name === "Email")?.link}`}
          target="_blank"
        >
          📧 Email me
        </Link>
        <Link to={routes.resume}>
          <Button>See my resume</Button>
        </Link>
      </div>
    </div>
  );
}
