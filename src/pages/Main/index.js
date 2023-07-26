import { useContext } from "react";
import { StateContext } from "../../context/StateContext";

function MainPage() {
  const { count } = useContext(StateContext);
  return <div>number {count}</div>;
}

export default MainPage;
