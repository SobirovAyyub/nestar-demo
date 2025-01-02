import { Stack } from "@mui/material";
import { NextPage } from "next";
import withLayoutBasic from "../libs/components/layout/LayoutBasic";

const AgentList: NextPage = () => {
  return (
    <div style={{ margin: "20px 0" }}>
      <Stack className="container">AGENTLIST</Stack>
    </div>
  );
};

export default withLayoutBasic(AgentList);