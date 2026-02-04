import ProfileCard from "./components/ProfileCard";
import Theme from "./components/Theme";

export default function App() {
  return (
    <>
      <ProfileCard name={"최원희"} age={27} job={"쉬었음 청년"} />
      <Theme name={"최원희"} age={"27"} job={"쉬었음 청년"} />
    </>
  );
}
