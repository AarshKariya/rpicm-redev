import Blogs from "@/components/blogPage/Blogs";
import BlogComponent from "@/components/blogPage/blogComponent/BlogComponent";
import ExploreCourses from "@/components/exploreCourses/ExploreCourses";
import Footer from "@/components/footer/FooterPage";
import NavigationBar from "@/components/navigationBar/NavigationBar";
import React from "react";

const BlogsRoute = () => {
  return (
    <div style={{ overflow: "hidden", margin: '-8px' }}>
      <NavigationBar isOnLandingPage={false} />
      <BlogComponent />
      <Blogs blogsSliderHeading="Explore More..." />
      <ExploreCourses />
      <Footer />
    </div>
  );
};

export default BlogsRoute;
