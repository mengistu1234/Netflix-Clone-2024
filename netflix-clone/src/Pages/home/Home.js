import React from "react";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import Banner from "../../component/baner/Banner";
import RowList from "../../component/Rows/RowList/RowList";

const Home = () => {
  return (
    <>
      <Header />
      <Banner/>
       <RowList/>
      <Footer />
    </>
  );
};

export default Home;
