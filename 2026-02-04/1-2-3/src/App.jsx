import ProfileCard from "./components/ProfileCard";
import Post from "./components/Post";

export default function App() {
  return (
    <>
      <ProfileCard name={"최원희"} age={27} job={"백수"} />
      <Post author={"dozeoffzz"} content={"#react #JavaScript"} />
    </>
  );
}
