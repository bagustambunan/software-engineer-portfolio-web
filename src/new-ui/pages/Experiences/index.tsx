import { experiences } from "../../../constants/experince";
import { RoleEnum } from "../../../constants/types";
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
