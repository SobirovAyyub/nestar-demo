import { NextPage } from "next";
import { useState } from "react";
import withLayoutBasic from "../libs/components/layout/LayoutBasic";


const Community: NextPage = () => {
  const [title, setTitle] = useState<string>("hello");
  return (
    <div>
      COMMUNITY{""}
      <button onClick={() => alert("hello MIT")} style={{ margin: "15px" }}>
        Press me
      </button>
    </div>
  );
};
export default withLayoutBasic(Community);