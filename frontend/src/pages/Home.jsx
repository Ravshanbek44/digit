/** @format */

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Client from "../components/Client";
import Kimlaruchun from "../components/Kimlaruchun";
import Resourse from "../components/Resourse";
import Yangliklar from "../components/Yangliklar";

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <Portfolio />
      <Client/>
      <Kimlaruchun/>
      <Yangliklar/>
      <Resourse />
    </>
  );
};

export default Home;
