import Blogs from "@/components/blogPage/Blogs";
import BlogComponent from "@/components/blogPage/blogComponent/BlogComponent";
import Footer from "@/components/footer/FooterPage";
import NavigationBar from "@/components/navigationBar/NavigationBar";
import React from "react";

const BlogsRoute = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <NavigationBar isOnLandingPage={false} />
      <BlogComponent />
      <Blogs blogsSliderHeading="Explore More..." />
      <Footer />
    </div>
  );
};

export default BlogsRoute;
