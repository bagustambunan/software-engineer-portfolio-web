import { experiences } from "../../../shared/constants/experince";
import { RoleEnum } from "../../../shared/constants/types";
import ExperienceList from "../../components/ExperienceList";

export default function ExperiencesPage() {
  return (
    <ExperienceList
      experiences={experiences.filter(
        (experience) => experience.role === RoleEnum.SOFTWARE_ENGINEER
      )}
    />
  );
}
