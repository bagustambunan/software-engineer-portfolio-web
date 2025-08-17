import PageTitle from "../../components/PageTitle";
import { contacts } from "../../constants/contact";
import ContactList from "../../components/ContactList";

export default function ContactPage() {
  return (
    <div>
      <PageTitle title="💬 Contact Me" description="Get in touch with me." />
      <ContactList contacts={contacts} />
    </div>
  );
}
