import { useLocation, useNavigate } from "react-router-dom";
import PageTitle from "../../../shared/components/PageTitle";
import { profile } from "../../../shared/constants/profile";
import Tabs from "../../../shared/components/Tabs";
import { useMemo } from "react";
import { getSearchParam, setSearchParam } from "../../../shared/utils/url";
import ProjectList from "../../../shared/components/ProjectList";
import { projects } from "../../../shared/constants/project";

export default function ProjectsPage() {
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
      <PageTitle
        title="📝 Proud Projects"
        description="List of projects I'm proud of."
      />
      {profile.roles.length === 1 ? (
        <ProjectList
          projects={projects.filter(
            (project) => project.role === profile.roles[0].key
          )}
        />
      ) : (
        <Tabs
          key="project-tabs"
          tabItems={profile.roles.map((role) => ({
            key: role.key,
            label: `${role.emoji} As a ${role.label}`,
            content: (
              <ProjectList
                projects={projects.filter(
                  (project) => project.role === role.key
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
