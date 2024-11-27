import React from "react";
import Categories from "../../components/Categories/Categories";
import Header from "../../components/Header/Header";
import Promo from "../../components/Promo/Promo";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Promo />
        <Categories />
      </main>
    </>
  );
};

export default Home;
