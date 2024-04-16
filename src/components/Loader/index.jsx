import { PacmanLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export const Loader = () => {
  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <PacmanLoader color={"#8a85ff"} css={override} size={50} />
    </div>
  );
};
