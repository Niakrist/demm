import React from "react";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import Categories from "../../components/Categories/Categories";
import Feedback from "../../components/Feedback/Feedback";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Promo from "../../components/Promo/Promo";
import Stocks from "../../components/Stocks/Stocks";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Promo />
        <Categories />
        <Stocks />
        <AboutCompany />
        <Feedback />
      </main>
      <Footer />
    </>
  );
};

export default Home;
