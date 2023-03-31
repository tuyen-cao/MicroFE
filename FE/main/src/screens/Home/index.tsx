import React from "react";
import Category from "./Category";
import FeaturedProducts from "./FeaturedProducts";
import ProductSmallSlider from "./ProductSmallSlider";
import Banner from "./Banner";
import FromTheBlog from "./FromTheBlog";

const Homepage = ({ eventBus }: any) => {
  return (
    <>
      <Category />
      <FeaturedProducts eventBus={eventBus} />
      <Banner />
      <ProductSmallSlider />
      <FromTheBlog />
    </>
  );
};

export default Homepage;
