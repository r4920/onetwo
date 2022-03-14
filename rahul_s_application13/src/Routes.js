import React from "react";
import TypographyQuotationMainpoint from "pages/TypographyQuotationMainpoint";
import TypographyList from "pages/TypographyList";
import TypographyMaintext from "pages/TypographyMaintext";
import Cover from "pages/Cover";
import Hello from "pages/Hello";
import Navigation from "pages/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/cover" element={<Cover />} />
        <Route path="/typographymaintext" element={<TypographyMaintext />} />
        <Route path="/typographylist" element={<TypographyList />} />
        <Route
          path="/typographyquotationmainpoint"
          element={<TypographyQuotationMainpoint />}
        />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
