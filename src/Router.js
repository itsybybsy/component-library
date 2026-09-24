
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home.js";
import Intro from "./pages/GettingStarted.js";
import Usage from "./pages/Usage.js";

import DocsTypography from "./pages/DocumentationTypography.js";
import Colors from "./pages/DocumentationColors.js";

import DocsBox from "./pages/DocumentationBox.js";
import DocsCard from "./pages/DocumentationCard.js";
import DocsMenu from "./pages/DocumentationMenu.js";
import DocsImage from "./pages/DocumentationImage.js";

import DocsAppBar from "./pages/DocumentationAppBar.js";



const Router = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="overview" element={<Intro />} />
        <Route path="usage" element={<Usage />} />

        <Route path="typography" element={<DocsTypography />} />
        <Route path="colors" element={<Colors />} />

        <Route path="box" element={<DocsBox/>} />
        <Route path="card" element={<DocsCard />} />
        <Route path="menu" element={<DocsMenu />} />
        <Route path="image" element={<DocsImage />} />

        <Route path="appbar" element={<DocsAppBar />} />

    </Routes>
  );
}

export default Router;