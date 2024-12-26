import { useState } from "react";
const Community = () => {
  console.log('Community component - page router')
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
export default Community;