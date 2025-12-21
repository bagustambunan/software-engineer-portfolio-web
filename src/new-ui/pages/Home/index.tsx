import Window from "../../components/Window";

export default function HomePage() {
  return (
    <div>
      <Window
        title="Title"
        customStyle={{ window: { width: "500px", height: "300px" } }}
      >
        Home page
      </Window>
    </div>
  );
}
