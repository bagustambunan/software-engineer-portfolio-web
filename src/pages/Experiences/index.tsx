import PageTitle from "../../components/PageTitle";
import { experiences } from "../../constants/experince";
import ExperienceList from "../../components/ExperienceList";

export default function ExperiencesPage() {
  return (
    <div>
      <PageTitle
        title="💼 Experiences"
        description="List of experiences I've had."
      />
      <ExperienceList experiences={experiences} />
    </div>
  );
}
