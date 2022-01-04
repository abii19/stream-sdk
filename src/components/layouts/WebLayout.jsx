import { useSelector } from "react-redux";
import Actions from "../actions/Actions";
import Navbar from "./Navbar";

const WebLayout = (props) => {
  const { isPackageBought } = useSelector((state) => state.packages);

  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      {isPackageBought && <Actions />}
    </>
  );
};

export default WebLayout;
