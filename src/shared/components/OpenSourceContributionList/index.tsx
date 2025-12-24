import styles from "./style.module.css";
import Empty from "../Empty";
import { Link } from "react-router-dom";
import type { OpenSourceContribution } from "../../../shared/constants/types";

export default function OpenSourceContributionList({ contributions }: { contributions?: OpenSourceContribution[] }) {
  if (!contributions || contributions.length === 0) {
    return <Empty />;
  }
  return (
    <div className={styles.openSourceContributionListContainer}>
      {contributions.map((contribution, contributionIndex) => (
        <div
          key={`contribution-${contributionIndex}`}
          className={styles.openSourceContributionContainer}
        >
          <h3>{contribution.title}</h3>
          <span>{contribution.description}</span>
          <Link to={contribution.link} target="_blank">
            View Contribution ↗️
          </Link>
        </div>
      ))}
    </div>
  );
}
