import React from "react";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import CvHome from "./CV/CvHome";
import Footer from "./Footer/Footer";
import ListCategories from "./ListCategories/ListCategories";
import ListJobs from "./ListJobs/ListJobs";
import ListNew from "./New/ListNew";

export default function Home() {
  return (
    <div>
      {/* <Menu /> */}
      <Banner />
      <ListCategories />
      <CvHome />
      <ListJobs />
      <Contact />
      <ListNew />
      <Footer />
    </div>
  );
}
