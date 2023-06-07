import React from "react";
import Navbar from "../components/navbar";
import Announcement from "../components/announcement";
import Slider from "../components/slider";
import Categories from "../components/categories";
import Products from "../components/products";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
const home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default home;
