import { experiences } from "../../../shared/constants/experince";
import ExperienceList from "../../../shared/components/ExperienceList";
import { profile } from "../../../shared/constants/profile";
import Tabs from "../../../shared/components/Tabs";
import { useLocation, useNavigate } from "react-router-dom";
import { getSearchParam, setSearchParam } from "../../../shared/utils/url";
import { useMemo } from "react";

export default function ExperiencesPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleTabChange = (tab: string) => {
    const newUrl = setSearchParam(location.search, "role", tab);
    navigate(`${location.pathname}?${newUrl}`);
  };

  const activeTab = useMemo(() => {
    const tab = getSearchParam(location.search, "role");
    if (!tab) {
      return profile.roles[0].key;
    }
    if (!profile.roles.some((role) => role.key === tab)) {
      return profile.roles[0].key;
    }
    return tab;
  }, [location]);

  return (
    <div>
      {profile.roles.length === 1 ? (
        <ExperienceList
          experiences={experiences.filter(
            (experience) => experience.role === profile.roles[0].key
          )}
        />
      ) : (
        <Tabs
          key="project-tabs"
          tabItems={profile.roles.map((role) => ({
            key: role.key,
            label: `${role.emoji} As a ${role.label}`,
            content: (
              <ExperienceList
                experiences={experiences.filter(
                  (experience) => experience.role === role.key
                )}
              />
            ),
          }))}
          activeTab={activeTab}
          onChange={handleTabChange}
        />
      )}
    </div>
  );
}
