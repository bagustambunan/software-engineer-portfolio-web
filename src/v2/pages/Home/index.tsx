import { profile } from "../../../shared/constants/profile";
import Avatar from "../../../shared/components/Avatar";

export default function HomePage() {
  return (
    <div className="container">
      <Avatar />
      {profile.longDescription}
      {/* {profile.details?.map((detail) => (
        <Section title={detail.title}>
          {Array.isArray(detail.content) ? (
            detail.content?.map((content) => <div>{content}</div>)
          ) : (
            <div>{detail.content}</div>
          )}
        </Section>
      ))} */}
    </div>
  );
}
