import OpenSourceContributionList from "../../../shared/components/OpenSourceContributionList";
import Tabs from "../../../shared/components/Tabs";
import { openSourceContributions } from "../../../shared/constants/openSouceContribution";

export default function AchievementsPage() {
  return (
    <div>
      <Tabs
        key="project-tabs"
        tabItems={[
          {
            key: "open-source-contributions",
            label: "🌐 Open Source Contributions",
            content: (
              <OpenSourceContributionList
                contributions={openSourceContributions}
              />
            ),
          },
        ]}
        activeTab="open-source-contributions"
      />
    </div>
  );
}
