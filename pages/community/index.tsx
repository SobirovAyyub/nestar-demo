import withLayoutBasic from "../libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";



const Community: NextPage = () => {
  const [title, setTitle] = useState<string>("hello");
  return (
    <div style={{ margin: "20px 0" }}>
      <Stack className="container">COMMUNITY</Stack>
    </div>
  );
};
export default withLayoutBasic(Community);