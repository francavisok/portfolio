import { Routes, Route, Link } from "react-router-dom";
import { Stack, Box } from "@mui/system";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Me from "./Components/Me";
import Projects from "./Components/Projects";

function App() {
  return (
    <Stack minHeight={"100vh"}>
      <Navbar />
      <Box flexGrow={1} sx={{display: 'flex', alignItems: 'stretch'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/me' element={<Me />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </Box>
      <Footer />
    </Stack>
  );
}

export default App;
