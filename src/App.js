import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { Stack, Box } from "@mui/system";

function App() {
  return (
    <Stack height={"100vh"}>
      <Navbar />
      <Box flexGrow={1} >
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
      <Footer />
    </Stack>
  );
}

export default App;
