import { useLocation, useNavigate } from 'react-router-dom'
import PageTitle from '../../components/PageTitle'
import { profile } from "../../constants"
import Tab from '../../components/Tab'
import { useMemo } from 'react'
import { getSearchParam, setSearchParam } from '../../utils/url'
import ProjectList from '../../components/ProjectList'
import { projects } from '../../constants/project'

export default function ProjectPage() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleTabChange = (tab: string) => {
    const newUrl = setSearchParam(location.search, "role", tab)
    navigate(`${location.pathname}?${newUrl}`)
  }

  const activeTab = useMemo(() => {
    const tab = getSearchParam(location.search, "role")
    if (!tab) {
      return profile.roles[0].key
    }
    if (!profile.roles.some((role) => role.key === tab)) {
      return profile.roles[0].key
    }
    return tab
  }, [location])

  return (
    <div>
      <PageTitle title="📝 Proud Projects" description="List of projects I'm proud of." />
      <Tab
        tabItems={profile.roles.map((role) =>
        ({
          key: role.key,
          label: `${role.emoji} As a ${role.label}`,
          content: <ProjectList projects={projects.filter((project) => project.role === role.key)} />
        }
        )
        )}
        activeTab={activeTab}
        onChange={handleTabChange}
      />
    </div>
  )
}