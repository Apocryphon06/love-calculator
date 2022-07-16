import { Box } from "@mui/system";
import React from "react";
import { ResponceContextProvider } from "./context/ResponseContext";
import Lform from "./pages/Lform";

const App = () => {
  return (
    <ResponceContextProvider>
      <Box sx={{ m: 2, justifyContent: "center" }}>
        <Lform />
      </Box>
    </ResponceContextProvider>
  );
};

export default App;
